import type { HardhatRuntimeEnvironment } from 'hardhat/types'
import type { DeployFunction } from 'hardhat-deploy/types'

const deployFunction: DeployFunction = async function ({
  deployments,
  ethers,
  getChainId,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments
  const chainId = parseInt(await getChainId())
  const { deployer } = await getNamedAccounts()

  const coffinBox = await ethers.getContractOrNull('CoffinBoxV1')

  if (!coffinBox) {
    throw Error(`No coffinBox for chain #${chainId}!`)
  }

  await deploy('KashiPairMediumRiskV1', {
    from: deployer,
    args: [coffinBox.address],
    log: true,
    deterministicDeployment: false,
  })
}

export default deployFunction

deployFunction.dependencies = ['CoffinBoxV1']

deployFunction.tags = ['KashiPairMediumRiskV1']
