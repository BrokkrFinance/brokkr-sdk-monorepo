export const BROKKR_PORTFOLIO_INDEX_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "Index_AboveMaxAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "Index_BelowMinAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "Index_ExceedEquityValuationLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "Index_NotWhitelistedToken",
    type: "error"
  },
  {
    inputs: [],
    name: "Index_TooSmallAmountIndex",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address"
      }
    ],
    name: "Index_WrongPair",
    type: "error"
  },
  {
    inputs: [],
    name: "Index_WrongSwapAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "Index_ZeroAddress",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "dex",
        type: "uint8"
      }
    ],
    name: "SwapAdapter_WrongDEX",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address"
      }
    ],
    name: "SwapAdapter_WrongPair",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIndex",
        type: "uint256"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIndex",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address"
      },
      {
        internalType: "address",
        name: "token1",
        type: "address"
      },
      {
        internalType: "address",
        name: "router",
        type: "address"
      },
      {
        internalType: "enum SwapAdapter.DEX",
        name: "dex",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "pair",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "binStep",
        type: "uint256"
      }
    ],
    name: "addSwapRoute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address"
      },
      {
        internalType: "address",
        name: "token1",
        type: "address"
      },
      {
        internalType: "address",
        name: "router",
        type: "address"
      },
      {
        internalType: "enum SwapAdapter.DEX",
        name: "dex",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "pair",
        type: "address"
      }
    ],
    name: "addSwapRoute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address"
      },
      {
        internalType: "address",
        name: "token1",
        type: "address"
      },
      {
        internalType: "address",
        name: "router",
        type: "address"
      },
      {
        internalType: "enum SwapAdapter.DEX",
        name: "dex",
        type: "uint8"
      },
      {
        components: [
          {
            internalType: "address",
            name: "pair",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct SwapAdapter.PairData",
        name: "_pairData",
        type: "tuple"
      }
    ],
    name: "addSwapRoute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    name: "addWhitelistedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "allComponents",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allWhitelistedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountIndex",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      }
    ],
    name: "burnExactIndexForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "components",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "dexs",
    outputs: [
      {
        internalType: "enum SwapAdapter.DEX",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "maximize",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "includeAmmPrice",
        type: "bool"
      }
    ],
    name: "equityValuation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "equityValuationLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountTokenMax",
        type: "uint256"
      }
    ],
    name: "getAmountIndexFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIndex",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountIndex",
        type: "uint256"
      }
    ],
    name: "getAmountTokenFromExactIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "indexToken",
    outputs: [
      {
        internalType: "contract IIndexToken",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "wNATIVE",
            type: "address"
          },
          {
            internalType: "address",
            name: "indexToken",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "weight",
                type: "uint256"
              }
            ],
            internalType: "struct IIndexInit.Component[]",
            name: "components",
            type: "tuple[]"
          },
          {
            components: [
              {
                internalType: "address",
                name: "token0",
                type: "address"
              },
              {
                internalType: "address",
                name: "token1",
                type: "address"
              },
              {
                internalType: "address",
                name: "router",
                type: "address"
              },
              {
                internalType: "enum SwapAdapter.DEX",
                name: "dex",
                type: "uint8"
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "pair",
                    type: "address"
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                  }
                ],
                internalType: "struct SwapAdapter.PairData",
                name: "pairData",
                type: "tuple"
              }
            ],
            internalType: "struct IIndexInit.SwapRoute[]",
            name: "swapRoutes",
            type: "tuple[]"
          },
          {
            internalType: "address[]",
            name: "whitelistedTokens",
            type: "address[]"
          },
          {
            internalType: "address",
            name: "oracle",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "equityValuationLimit",
            type: "uint256"
          }
        ],
        internalType: "struct IIndexInit.IndexStrategyInitParams",
        name: "initParams",
        type: "tuple"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "isTokenWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountTokenMax",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountIndexMin",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      }
    ],
    name: "mintIndexFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIndex",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract IIndexOracle",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "pairData",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    name: "removeWhitelistedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "routers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_equityValuationLimit",
        type: "uint256"
      }
    ],
    name: "setEquityValuationLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address"
      }
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "wNATIVE",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "weights",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "whitelistedTokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
