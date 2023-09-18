export default [
  {
    inputs: [],
    name: 'UIntOutOfBounds',
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
        internalType: 'bytes32',
        name: 'targetName',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
    ],
    name: 'BackupConfigSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint192[]',
        name: 'refAmts',
        type: 'uint192[]',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'disabled',
        type: 'bool',
      },
    ],
    name: 'BasketSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'enum CollateralStatus',
        name: 'oldStatus',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'enum CollateralStatus',
        name: 'newStatus',
        type: 'uint8',
      },
    ],
    name: 'BasketStatusChanged',
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
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint192[]',
        name: 'targetAmts',
        type: 'uint192[]',
      },
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'targetNames',
        type: 'bytes32[]',
      },
    ],
    name: 'PrimeBasketSet',
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
        indexed: false,
        internalType: 'uint48',
        name: 'oldVal',
        type: 'uint48',
      },
      {
        indexed: false,
        internalType: 'uint48',
        name: 'newVal',
        type: 'uint48',
      },
    ],
    name: 'WarmupPeriodSet',
    type: 'event',
  },
  {
    inputs: [],
    name: 'MAX_TARGET_AMT',
    outputs: [
      {
        internalType: 'uint192',
        name: '',
        type: 'uint192',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_WARMUP_PERIOD',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_WARMUP_PERIOD',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
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
    name: 'basketsHeldBy',
    outputs: [
      {
        components: [
          {
            internalType: 'uint192',
            name: 'bottom',
            type: 'uint192',
          },
          {
            internalType: 'uint192',
            name: 'top',
            type: 'uint192',
          },
        ],
        internalType: 'struct BasketRange',
        name: 'baskets',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'disableBasket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fullyCollateralized',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: 'targetName',
        type: 'bytes32',
      },
    ],
    name: 'getBackupConfig',
    outputs: [
      {
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'basketNonce',
        type: 'uint48',
      },
    ],
    name: 'getHistoricalBasket',
    outputs: [
      {
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'quantities',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPrimeBasket',
    outputs: [
      {
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        internalType: 'bytes32[]',
        name: 'targetNames',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint192[]',
        name: 'targetAmts',
        type: 'uint192[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IMain',
        name: 'main_',
        type: 'address',
      },
      {
        internalType: 'uint48',
        name: 'warmupPeriod_',
        type: 'uint48',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isReady',
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
    name: 'lotPrice',
    outputs: [
      {
        internalType: 'uint192',
        name: 'lotLow',
        type: 'uint192',
      },
      {
        internalType: 'uint192',
        name: 'lotHigh',
        type: 'uint192',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'main',
    outputs: [
      {
        internalType: 'contract IMain',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nonce',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'price',
    outputs: [
      {
        internalType: 'uint192',
        name: 'low',
        type: 'uint192',
      },
      {
        internalType: 'uint192',
        name: 'high',
        type: 'uint192',
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
        internalType: 'contract IERC20',
        name: 'erc20',
        type: 'address',
      },
    ],
    name: 'quantity',
    outputs: [
      {
        internalType: 'uint192',
        name: '',
        type: 'uint192',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'contract IAsset',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'quantityUnsafe',
    outputs: [
      {
        internalType: 'uint192',
        name: '',
        type: 'uint192',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint192',
        name: 'amount',
        type: 'uint192',
      },
      {
        internalType: 'enum RoundingMode',
        name: 'rounding',
        type: 'uint8',
      },
    ],
    name: 'quote',
    outputs: [
      {
        internalType: 'address[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'quantities',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48[]',
        name: 'basketNonces',
        type: 'uint48[]',
      },
      {
        internalType: 'uint192[]',
        name: 'portions',
        type: 'uint192[]',
      },
      {
        internalType: 'uint192',
        name: 'amount',
        type: 'uint192',
      },
    ],
    name: 'quoteCustomRedemption',
    outputs: [
      {
        internalType: 'address[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'quantities',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'refreshBasket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'targetName',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
      {
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
    ],
    name: 'setBackupConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20[]',
        name: 'erc20s',
        type: 'address[]',
      },
      {
        internalType: 'uint192[]',
        name: 'targetAmts',
        type: 'uint192[]',
      },
    ],
    name: 'setPrimeBasket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'val',
        type: 'uint48',
      },
    ],
    name: 'setWarmupPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'status',
    outputs: [
      {
        internalType: 'enum CollateralStatus',
        name: 'status_',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timestamp',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'trackStatus',
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
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'warmupPeriod',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
