export const soulSwapExports = {
    "1": [
      {
        "name": "ethereum",
        "chainId": "1",
        "contracts": {
          "SoulSwapFactory": {
            "address": "0x794d858b0b152fb68a5CE465451D729EFfA67f08",
            "abi": [
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeToSetter",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token0",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "name": "PairCreated",
                "type": "event"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "name": "allPairs",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "allPairsLength",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  }
                ],
                "name": "createPair",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "feeTo",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "feeToSetter",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "name": "getPair",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "migrator",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "pairCodeHash",
                "outputs": [
                  {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeTo",
                    "type": "address"
                  }
                ],
                "name": "setFeeTo",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeToSetter",
                    "type": "address"
                  }
                ],
                "name": "setFeeToSetter",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_migrator",
                    "type": "address"
                  }
                ],
                "name": "setMigrator",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              }
            ]
          },
          "UniswapV2Router02": {
            "address": "0x2a8B48a8B8a8a8E4a184280333c418BcdcE72dE9",
            "abi": [
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "_WETH",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "inputs": [],
                "name": "WETH",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountADesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBDesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "addLiquidity",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenDesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "addLiquidityETH",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "factory",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                  }
                ],
                "name": "getAmountIn",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                  }
                ],
                "name": "getAmountOut",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  }
                ],
                "name": "getAmountsIn",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  }
                ],
                "name": "getAmountsOut",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveB",
                    "type": "uint256"
                  }
                ],
                "name": "quote",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidity",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidityETH",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityETHWithPermit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityWithPermit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapETHForExactTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactETHForTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForETH",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapTokensForExactETH",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapTokensForExactTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "stateMutability": "payable",
                "type": "receive"
              }
            ]
          }
        }
      }
    ],
    "250": [
      {
        "name": "fantom",
        "chainId": "250",
        "contracts": {
          "SoulSwapFactory": {
            "address": "0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF",
            "abi": [
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeToSetter",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token0",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "name": "PairCreated",
                "type": "event"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "name": "allPairs",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "allPairsLength",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  }
                ],
                "name": "createPair",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "feeTo",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "feeToSetter",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "name": "getPair",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "migrator",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "pairCodeHash",
                "outputs": [
                  {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeTo",
                    "type": "address"
                  }
                ],
                "name": "setFeeTo",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeToSetter",
                    "type": "address"
                  }
                ],
                "name": "setFeeToSetter",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_migrator",
                    "type": "address"
                  }
                ],
                "name": "setMigrator",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              }
            ]
          },
          "UniswapV2Router02": {
            "address": "0x6b3d631B87FE27aF29efeC61d2ab8CE4d621cCBF",
            "abi": [
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "_WETH",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "inputs": [],
                "name": "WETH",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountADesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBDesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "addLiquidity",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenDesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "addLiquidityETH",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "factory",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                  }
                ],
                "name": "getAmountIn",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                  }
                ],
                "name": "getAmountOut",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  }
                ],
                "name": "getAmountsIn",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  }
                ],
                "name": "getAmountsOut",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveB",
                    "type": "uint256"
                  }
                ],
                "name": "quote",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidity",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidityETH",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityETHWithPermit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityWithPermit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapETHForExactTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactETHForTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForETH",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapTokensForExactETH",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapTokensForExactTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "stateMutability": "payable",
                "type": "receive"
              }
            ]
          }
        }
      }
    ],
    "43114": [
      {
        "name": "avalanche",
        "chainId": "43114",
        "contracts": {
          "SoulSwapFactory": {
            "address": "0x5BB2a9984de4a69c05c996F7EF09597Ac8c9D63a",
            "abi": [
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeToSetter",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token0",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "name": "PairCreated",
                "type": "event"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "name": "allPairs",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "allPairsLength",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  }
                ],
                "name": "createPair",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "feeTo",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "feeToSetter",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "name": "getPair",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "migrator",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "pairCodeHash",
                "outputs": [
                  {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeTo",
                    "type": "address"
                  }
                ],
                "name": "setFeeTo",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_feeToSetter",
                    "type": "address"
                  }
                ],
                "name": "setFeeToSetter",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_migrator",
                    "type": "address"
                  }
                ],
                "name": "setMigrator",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              }
            ]
          },
          "UniswapV2Router02": {
            "address": "0xa4594460A9d3D41e8B85542D34E23AdAbc3c86Ef",
            "abi": [
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "_WETH",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "inputs": [],
                "name": "WETH",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountADesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBDesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "addLiquidity",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenDesired",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "addLiquidityETH",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "factory",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                  }
                ],
                "name": "getAmountIn",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                  }
                ],
                "name": "getAmountOut",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  }
                ],
                "name": "getAmountsIn",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  }
                ],
                "name": "getAmountsOut",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reserveB",
                    "type": "uint256"
                  }
                ],
                "name": "quote",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "pure",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidity",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidityETH",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityETHWithPermit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                  }
                ],
                "name": "removeLiquidityWithPermit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapETHForExactTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactETHForTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForETH",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapTokensForExactETH",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                  }
                ],
                "name": "swapTokensForExactTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "stateMutability": "payable",
                "type": "receive"
              }
            ]
          }
        }
      }
    ]
  }