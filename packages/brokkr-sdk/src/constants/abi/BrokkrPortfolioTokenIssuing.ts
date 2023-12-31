export const BROKKR_PORTFOLIO_TOKEN_ISSUEING_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'InvalidFeeError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvestableAlreadyAdded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvestableHasNonZeroAllocation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvestableNotYetAdded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvestmentLimitPerAddressExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RebalanceIncorrectAllocationsLength',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RebalancePercentageNot100',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TooSmallDepositTokenAmountOut',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TotalInvestmentLimitExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmountDeposited',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmountInvested',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmountWithdrawn',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroDepositTokenReceiver',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroFeeReceiver',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroInvestmentTokenReceiver',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'investmentTokenReceiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'DepositFeeChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'FeeClaim',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'feeReceiver',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'FeeReceiverChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IInvestable',
        name: 'investable',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint24[]',
        name: 'newAllocations',
        type: 'uint24[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'InvestableAdd',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IInvestable',
        name: 'investable',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'InvestableChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IInvestable',
        name: 'investable',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint24[]',
        name: 'newAllocations',
        type: 'uint24[]',
      },
    ],
    name: 'InvestableRemove',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'PerformanceFeeChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Rebalance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint24[]',
        name: 'newAllocations',
        type: 'uint24[]',
      },
    ],
    name: 'TargetInvestableAllocationsSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'depositTokenReceiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'WithdrawalFeeChange',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract IInvestable',
        name: 'investable',
        type: 'address',
      },
      {
        internalType: 'uint24[]',
        name: 'newAllocations',
        type: 'uint24[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'addInvestable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IInvestable',
        name: 'investable',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'changeInvestable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'claimFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'depositTokenAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minimumDepositTokenAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'investmentTokenReceiver',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAssetBalances',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        internalType: 'struct IAum.Balance[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'shouldMaximise',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'shouldIncludeAmmPrice',
        type: 'bool',
      },
    ],
    name: 'getAssetValuations',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'valuation',
            type: 'uint256',
          },
        ],
        internalType: 'struct IAum.Valuation[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getClaimedFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentAccumulatedFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    name: 'getDepositFee',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDepositToken',
    outputs: [
      {
        internalType: 'contract IERC20Upgradeable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'shouldMaximise',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'shouldIncludeAmmPrice',
        type: 'bool',
      },
    ],
    name: 'getEquityValuation',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    name: 'getFeeReceiver',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInvestables',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IInvestable',
            name: 'investable',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'allocationPercentage',
            type: 'uint24',
          },
          {
            internalType: 'string[]',
            name: 'keys',
            type: 'string[]',
          },
          {
            internalType: 'string[]',
            name: 'values',
            type: 'string[]',
          },
        ],
        internalType: 'struct InvestableDesc[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInvestmentLimitPerAddress',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInvestmentToken',
    outputs: [
      {
        internalType: 'contract IInvestmentToken',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getInvestmentTokenBalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInvestmentTokenSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLiabilityBalances',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        internalType: 'struct IAum.Balance[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    name: 'getLiabilityValuations',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'valuation',
            type: 'uint256',
          },
        ],
        internalType: 'struct IAum.Valuation[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    name: 'getPerformanceFee',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'getTotalDepositFee',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTotalInvestmentLimit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'getTotalPerformanceFee',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'getTotalWithdrawalFee',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    name: 'getWithdrawalFee',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'humanReadableName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IInvestmentToken',
            name: 'investmentToken',
            type: 'address',
          },
          {
            internalType: 'contract IERC20Upgradeable',
            name: 'depositToken',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'depositFee',
            type: 'uint24',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'key',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'value',
                type: 'string',
              },
            ],
            internalType: 'struct NameValuePair[]',
            name: 'depositFeeParams',
            type: 'tuple[]',
          },
          {
            internalType: 'uint24',
            name: 'withdrawalFee',
            type: 'uint24',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'key',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'value',
                type: 'string',
              },
            ],
            internalType: 'struct NameValuePair[]',
            name: 'withdrawFeeParams',
            type: 'tuple[]',
          },
          {
            internalType: 'uint24',
            name: 'performanceFee',
            type: 'uint24',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'key',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'value',
                type: 'string',
              },
            ],
            internalType: 'struct NameValuePair[]',
            name: 'performanceFeeParams',
            type: 'tuple[]',
          },
          {
            internalType: 'address',
            name: 'feeReceiver',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'key',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'value',
                type: 'string',
              },
            ],
            internalType: 'struct NameValuePair[]',
            name: 'feeReceiverParams',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'totalInvestmentLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'investmentLimitPerAddress',
            type: 'uint256',
          },
        ],
        internalType: 'struct PortfolioArgs',
        name: 'portfolioArgs',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minimumDepositTokenAmountOut',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[][]',
        name: 'depositParams',
        type: 'tuple[][]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[][]',
        name: 'withdrawParams',
        type: 'tuple[][]',
      },
    ],
    name: 'rebalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IInvestable',
        name: 'investable',
        type: 'address',
      },
      {
        internalType: 'uint24[]',
        name: 'newAllocations',
        type: 'uint24[]',
      },
    ],
    name: 'removeInvestable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint24',
        name: 'fee_',
        type: 'uint24',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'setDepositFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'feeReceiver_',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'setFeeReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'investmentLimitPerAddress',
        type: 'uint256',
      },
    ],
    name: 'setInvestmentLimitPerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IInvestmentToken',
        name: 'investmentToken',
        type: 'address',
      },
    ],
    name: 'setInvestmentToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint24',
        name: 'fee_',
        type: 'uint24',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'setPerformanceFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint24[]',
        name: 'newAllocations',
        type: 'uint24[]',
      },
    ],
    name: 'setTargetInvestableAllocations',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'totalInvestmentLimit',
        type: 'uint256',
      },
    ],
    name: 'setTotalInvestmentLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint24',
        name: 'fee_',
        type: 'uint24',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'setWithdrawalFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'trackingName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'investmentTokenAmountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minimumDepositTokenAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'depositTokenReceiver',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
        ],
        internalType: 'struct NameValuePair[]',
        name: 'params',
        type: 'tuple[]',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
