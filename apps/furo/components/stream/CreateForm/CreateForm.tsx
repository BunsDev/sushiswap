import { Signature } from '@ethersproject/bytes'
import { parseUnits } from '@ethersproject/units'
import { yupResolver } from '@hookform/resolvers/yup'
import { Amount, Currency } from 'soulswap-currency'
import { FundSource } from 'soulswap-hooks'
import log from 'soulswap-log'
import { JSBI } from 'soulswap-math'
import { Button, createToast, Dots, Form } from 'soulswap-ui'
import { BENTOBOX_ADDRESS, useCoffinBoxTotal, useFuroStreamRouterContract } from 'soulswap-wagmi'
import { Approve } from 'soulswap-wagmi/systems'
import { approveCoffinBoxAction, batchAction, streamCreationAction } from 'lib'
import { useNotifications } from 'lib/state/storage'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useAccount, useDeprecatedSendTransaction, useNetwork } from 'wagmi'

import { CreateStreamFormData, CreateStreamFormDataValidated } from '../types'
import { GeneralDetailsSection } from './GeneralDetailsSection'
import { createStreamSchema } from './schema'
import { StreamAmountDetails } from './StreamAmountDetails'

export const CreateForm: FC = () => {
  const { address } = useAccount()
  const { chain: activeChain } = useNetwork()
  const [error, setError] = useState<string>()
  const contract = useFuroStreamRouterContract(activeChain?.id)
  const [, { createNotification }] = useNotifications(address)
  const { sendTransactionAsync, isLoading: isWritePending } = useDeprecatedSendTransaction()
  const [signature, setSignature] = useState<Signature>()

  const methods = useForm<CreateStreamFormData>({
    // @ts-ignore
    resolver: yupResolver(createStreamSchema),
    defaultValues: {
      currency: undefined,
      startDate: undefined,
      endDate: undefined,
      recipient: undefined,
      amount: '',
      fundSource: FundSource.WALLET,
    },
    mode: 'onChange',
  })

  const {
    formState: { isValid, isValidating },
    watch,
    reset,
  } = methods

  // @ts-ignore
  const [currency, amount] = watch(['currency', 'amount'])

  const amountAsEntity = useMemo<Amount<Currency> | undefined>(() => {
    if (!currency || !amount) return undefined

    let value = undefined
    try {
      value = Amount.fromRawAmount(currency, JSBI.BigInt(parseUnits(String(amount), currency.decimals).toString()))
    } catch (e) {
      console.debug(e)
    }

    return value
  }, [amount, currency])

  const rebase = useCoffinBoxTotal(activeChain?.id, amountAsEntity?.currency)

  const onSubmit: SubmitHandler<CreateStreamFormData> = useCallback(
    async (data) => {
      if (!amountAsEntity || !contract || !address || !activeChain?.id || !rebase) return

      // Can cast here safely since input must have been validated already
      const _data = data as CreateStreamFormDataValidated

      setError(undefined)

      const actions = [
        approveCoffinBoxAction({ contract, user: address, signature }),
        streamCreationAction({
          contract,
          recipient: _data.recipient,
          currency: _data.currency,
          startDate: new Date(_data.startDate),
          endDate: new Date(_data.endDate),
          amount: amountAsEntity,
          fromBentobox: _data.fundSource === FundSource.BENTOBOX,
          minShare: amountAsEntity.toShare(rebase),
        }),
      ]

      try {
        const data = await sendTransactionAsync({
          request: {
            from: address,
            to: contract?.address,
            data: batchAction({ contract, actions }),
            value: amountAsEntity.currency.isNative ? amountAsEntity.quotient.toString() : '0',
          },
        })
        const ts = new Date().getTime()
        createToast({
          type: 'createStream',
          txHash: data.hash,
          chainId: activeChain.id,
          timestamp: ts,
          groupTimestamp: ts,
          promise: data.wait(),
          summary: {
            pending: (
              <Dots>
                Creating {amountAsEntity?.toSignificant(6)} {amountAsEntity.currency.symbol} stream
              </Dots>
            ),
            completed: `Successfully created a ${amountAsEntity?.toSignificant(6)} ${
              amountAsEntity.currency.symbol
            } stream`,
            failed: 'Something went wrong creating a new stream',
          },
        })

        setSignature(undefined)
      } catch (e: any) {
        setError(e.message)

        log.tenderly({
          chainId: activeChain?.id,
          from: address,
          to: contract.address,
          data: batchAction({ contract, actions }),
          value: amountAsEntity.currency.isNative ? amountAsEntity.quotient.toString() : '0',
        })
      }
    },
    [address, activeChain?.id, amountAsEntity, contract, sendTransactionAsync, signature, rebase]
  )

  useEffect(() => {
    reset()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChain?.id, address])

  return (
    <>
      <FormProvider {...methods}>
        <Form header="Create Stream" onSubmit={methods.handleSubmit(onSubmit)}>
          <GeneralDetailsSection />
          <StreamAmountDetails />
          <Form.Buttons className="flex flex-col items-end gap-3">
            <Approve
              className="!items-end"
              components={
                <Approve.Components>
                  <Approve.Bentobox address={contract?.address} onSignature={setSignature} />
                  <Approve.Token
                    amount={amountAsEntity}
                    address={activeChain?.id ? BENTOBOX_ADDRESS[activeChain.id] : undefined}
                  />
                </Approve.Components>
              }
              onSuccess={createNotification}
              render={({ approved }) => (
                <Button
                  type="submit"
                  variant="filled"
                  color="gradient"
                  disabled={isWritePending || !approved || !isValid || isValidating}
                >
                  {isWritePending ? <Dots>Confirm transaction</Dots> : 'Create stream'}
                </Button>
              )}
            />
          </Form.Buttons>
        </Form>
      </FormProvider>
    </>
  )
}
