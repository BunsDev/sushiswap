// import dynamic from 'next/dynamic'
// const Connect = dynamic(() => import('soulswap-wagmi/components/Connect'), { ssr: false })
import { Wallet } from 'soulswap-wagmi'
import React, { FC } from 'react'

const Index: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold underline">Wallet example</h1>
      <Wallet.Button />
    </div>
  )
}

export default Index
