export default [
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
        internalType: 'contract IERC20',
        name: 'erc20',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'contract IAsset',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'AssetRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: 'erc20',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'contract IAsset',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'AssetUnregistered',
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
    inputs: [],
    name: 'erc20s',
    outputs: [
      {
        internalType: 'contract IERC20[]',
        name: 'erc20s_',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRegistry',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IERC20[]',
            name: 'erc20s',
            type: 'address[]',
          },
          {
            internalType: 'contract IAsset[]',
            name: 'assets',
            type: 'address[]',
          },
        ],
        internalType: 'struct Registry',
        name: 'reg',
        type: 'tuple',
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
        internalType: 'contract IAsset[]',
        name: 'assets_',
        type: 'address[]',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'isRegistered',
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
    inputs: [],
    name: 'refresh',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IAsset',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'register',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IAsset',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'swapRegistered',
    outputs: [
      {
        internalType: 'bool',
        name: 'swapped',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
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
    name: 'toAsset',
    outputs: [
      {
        internalType: 'contract IAsset',
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
        internalType: 'contract IERC20',
        name: 'erc20',
        type: 'address',
      },
    ],
    name: 'toColl',
    outputs: [
      {
        internalType: 'contract ICollateral',
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
        internalType: 'contract IAsset',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'unregister',
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
] as const
