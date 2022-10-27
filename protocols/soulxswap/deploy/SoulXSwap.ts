import coffinBoxExports from 'soulswap-coffinbox/exports.json'
import { INIT_CODE_HASH } from 'soulswap-amm'
import {
  STARGATE_BRIDGE_TOKENS,
  STARGATE_ROUTER_ADDRESS,
  STARGATE_USDC_ADDRESS,
  STARGATE_WIDGET_ADDRESS,
} from 'soulswap-stargate'
import sushiSwapExports from 'soulswap-sushiswap/exports.json'
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
  const factory = await ethers.getContractOrNull('UniswapV2Factory')

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

  if (!factory && !(chainId in sushiSwapExports)) {
    // throw Error(`No FACTORY_ADDRESS for chain #${chainId}!`)
    console.warn(`No FACTORY_ADDRESS for chain #${chainId}!`)
  }

  if ((factory || chainId in sushiSwapExports) && !(chainId in INIT_CODE_HASH)) {
    throw Error(`No INIT_CODE_HASH for chain #${chainId}!`)
  }

  const args = [
    coffinBoxExports?.[chainId.toString() as keyof Omit<typeof coffinBoxExports, '31337'>]?.[0]?.contracts?.CoffinBoxV1
      ?.address,
    STARGATE_ROUTER_ADDRESS[chainId],
    sushiSwapExports?.[chainId.toString() as keyof Omit<typeof sushiSwapExports, '31337'>]?.[0]?.contracts
      ?.UniswapV2Factory.address ?? ethers.constants.AddressZero,
    INIT_CODE_HASH?.[chainId] ?? ethers.constants.HashZero,
    STARGATE_WIDGET_ADDRESS[chainId as keyof typeof STARGATE_WIDGET_ADDRESS],
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
