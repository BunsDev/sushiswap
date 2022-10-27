import 'dotenv/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-solhint'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@tenderly/hardhat-tenderly'
import '@typechain/hardhat'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'

import type { HardhatUserConfig } from 'hardhat/config'

const accounts = {
  mnemonic: process.env.MNEMONIC || 'test test test test test test test test test test test junk',
  accountsBalance: '990000000000000000000',
}

export const defaultConfig: HardhatUserConfig = {
  etherscan: {
    customChains: [
      {
        network: 'kava',
        chainId: 2222,
        urls: {
          apiURL: 'https://explorer.kava.io/api',
          browserURL: 'https://explorer.kava.io',
        },
      },
      {
        network: 'metis',
        chainId: 1088,
        urls: {
          apiURL: 'https://andromeda-explorer.metis.io/api',
          browserURL: 'https://andromeda-explorer.metis.io',
        },
      },
    ],
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || '',
      // fantom mainnet
      opera: process.env.FTMSCAN_API_KEY || '',
      // avalanche
      avalanche: process.env.SNOWTRACE_API_KEY || '',
    },
  },
  tenderly: {
    project: process.env.TENDERLY_PROJECT || '',
    username: process.env.TENDERLY_USERNAME || '',
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
    // alwaysGenerateOverloads: true;
    // discriminateTypes: boolean;
    // tsNocheck: boolean;
    // externalArtifacts?: string[];
  },
  networks: {
    localhost: {
      live: false,
      saveDeployments: false,
      tags: ['local'],
    },
    hardhat: {
      chainId: 31337,
      accounts,
      live: false,
      saveDeployments: false,
      tags: ['test', 'local'],
      // Solidity-coverage overrides gasPrice to 1 which is not compatible with EIP1559
      hardfork: process.env.CODE_COVERAGE ? 'berlin' : 'london',
      forking: {
        enabled: process.env.FORKING === 'true',
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      },
    },
    ethereum: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts,
      chainId: 1,
      live: true,
      saveDeployments: true,
    },
    fantom: {
      url: 'https://rpcapi.fantom.network',
      accounts,
      chainId: 250,
      live: true,
      saveDeployments: true,
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts,
      chainId: 43114,
      live: true,
      saveDeployments: true,
      gasPrice: 470000000000,
    }
  },
  namedAccounts: {
    // e.g. ledger://0x18dd4e0Eb8699eA4fee238dE41ecF115e32272F8
    deployer: process.env.LEDGER || { default: 0 },
    alice: {
      default: 1,
    },
    bob: {
      default: 2,
    },
    carol: {
      default: 3,
    },
    dev: {
      default: 4,
    },
    feeTo: {
      default: 5,
    },
  },
}
