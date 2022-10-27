import { coffinBoxExports } from './coffinBoxExports'
import { INIT_CODE_HASH } from 'soulswap-amm'
import {
  STARGATE_BRIDGE_TOKENS,
  STARGATE_ROUTER_ADDRESS,
  STARGATE_USDC_ADDRESS,
  STARGATE_WIDGET_ADDRESS,
} from 'soulswap-stargate'
import { soulSwapExports } from './soulSwapExports'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  getChainId,
  ethers,
  tenderly,
  run,
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments
  const chainId = await getChainId()

  const { deployer } = await getNamedAccounts()

  const coffinBox = await ethers.getContractOrNull('CoffinBoxV1')
  const factory = await ethers.getContractOrNull('SoulSwapFactory')

  if (!coffinBox && !(chainId in coffinBoxExports)) {
    throw Error(`No COFFINBOX_ADDRESS for chain #${chainId}!`)
  }

  if (!(chainId in STARGATE_ROUTER_ADDRESS)) {
    throw Error(`No STARGATE_ROUTER_ADDRESS for chain #${chainId}!`)
  }

  if (!(chainId in STARGATE_USDC_ADDRESS)) {
    throw Error(`No STARGATE_USDC_ADDRESS for chain #${chainId}!`)
  }

  if (!(chainId in STARGATE_WIDGET_ADDRESS)) {
    throw Error(`No STARGATE_WIDGET_ADDRESS for chain #${chainId}!`)
  }

  if (!factory && !(chainId in soulSwapExports)) {
    // throw Error(`No FACTORY_ADDRESS for chain #${chainId}!`)
    console.warn(`No FACTORY_ADDRESS for chain #${chainId}!`)
  }

  if ((factory || chainId in soulSwapExports) && !(chainId in INIT_CODE_HASH)) {
    throw Error(`No INIT_CODE_HASH for chain #${chainId}!`)
  }

  const args = [
    coffinBoxExports?.[chainId.toString() as keyof Omit<typeof coffinBoxExports, '31337'>]?.[0]?.contracts?.CoffinBoxV1
      ?.address,
    STARGATE_ROUTER_ADDRESS[chainId],
    soulSwapExports?.[chainId.toString() as keyof Omit<typeof soulSwapExports, '31337'>]?.[0]?.contracts
      ?.SoulSwapFactory.address ?? ethers.constants.AddressZero,
    INIT_CODE_HASH?.[chainId] ?? ethers.constants.HashZero,
    // STARGATE_WIDGET_ADDRESS[chainId as keyof typeof STARGATE_WIDGET_ADDRESS],
    STARGATE_WIDGET_ADDRESS[chainId],
  ]

  const { address } = await deploy('soulxswap', {
    from: deployer,
    args,
    deterministicDeployment: false,
  })

  const contract = await ethers.getContract('soulxswap')

  for (const token of STARGATE_BRIDGE_TOKENS[chainId]) {
    await contract.approveToStargateRouter(token.address)
  }

  await run('verify:verify', {
    address,
    constructorArguments: args,
    waitConfirmations: 20,
  })

  await tenderly.persistArtifacts([
    {
      name: 'soulxswap',
      address: contract.address,
    },
  ])

  // await tenderly.verify([
  //   {
  //     name: 'soulxswap',
  //     address: contract.address,
  //   },
  // ])

  console.log(`soulxswap deployed on chain #${chainId} at address ${address}`)
}

func.dependencies = ['CoffinBoxV1']

func.tags = ['soulxswap']

func.skip = ({ getChainId }) =>
  new Promise((resolve, reject) => {
    getChainId()
      .then((chainId) => resolve(chainId === '31337'))
      .catch((error) => reject(error))
  })

export default func
