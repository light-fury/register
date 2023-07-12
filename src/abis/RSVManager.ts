export default [
  {
    constant: false,
    inputs: [
      {
        name: 'val',
        type: 'bool',
      },
    ],
    name: 'setEmergency',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'isFullyCollateralized',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'executeProposal',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'nominateNewOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'rsvAmount',
        type: 'uint256',
      },
    ],
    name: 'toIssue',
    outputs: [
      {
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'rsvAmount',
        type: 'uint256',
      },
    ],
    name: 'toRedeem',
    outputs: [
      {
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'trustedVault',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'proposalsLength',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'seigniorage',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'declaration',
        type: 'string',
      },
    ],
    name: 'renounceOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'nominatedOwner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'operator',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'clearProposals',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'acceptProposal',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newVaultAddress',
        type: 'address',
      },
    ],
    name: 'setVault',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'delay',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'tokens',
        type: 'address[]',
      },
      {
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        name: 'toVault',
        type: 'bool[]',
      },
    ],
    name: 'proposeSwap',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'trustedBasket',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_operator',
        type: 'address',
      },
    ],
    name: 'setOperator',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'trustedRSV',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'trustedProposals',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'issuancePaused',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'val',
        type: 'bool',
      },
    ],
    name: 'setIssuancePaused',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'tokens',
        type: 'address[]',
      },
      {
        name: 'weights',
        type: 'uint256[]',
      },
    ],
    name: 'proposeWeights',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'emergency',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'rsvAmount',
        type: 'uint256',
      },
    ],
    name: 'issue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_seigniorage',
        type: 'uint256',
      },
    ],
    name: 'setSeigniorage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'rsvAmount',
        type: 'uint256',
      },
    ],
    name: 'redeem',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'cancelProposal',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_delay',
        type: 'uint256',
      },
    ],
    name: 'setDelay',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'trustedProposalFactory',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'vaultAddr',
        type: 'address',
      },
      {
        name: 'rsvAddr',
        type: 'address',
      },
      {
        name: 'proposalFactoryAddr',
        type: 'address',
      },
      {
        name: 'basketAddr',
        type: 'address',
      },
      {
        name: 'operatorAddr',
        type: 'address',
      },
      {
        name: '_seigniorage',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'ProposalsCleared',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Issuance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Redemption',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'oldVal',
        type: 'bool',
      },
      {
        indexed: true,
        name: 'newVal',
        type: 'bool',
      },
    ],
    name: 'IssuancePausedChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'oldVal',
        type: 'bool',
      },
      {
        indexed: true,
        name: 'newVal',
        type: 'bool',
      },
    ],
    name: 'EmergencyChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'oldAccount',
        type: 'address',
      },
      {
        indexed: true,
        name: 'newAccount',
        type: 'address',
      },
    ],
    name: 'OperatorChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'oldVal',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'newVal',
        type: 'uint256',
      },
    ],
    name: 'SeigniorageChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'oldVaultAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'newVaultAddr',
        type: 'address',
      },
    ],
    name: 'VaultChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'oldVal',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'newVal',
        type: 'uint256',
      },
    ],
    name: 'DelayChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'proposer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'tokens',
        type: 'address[]',
      },
      {
        indexed: false,
        name: 'weights',
        type: 'uint256[]',
      },
    ],
    name: 'WeightsProposed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'proposer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'tokens',
        type: 'address[]',
      },
      {
        indexed: false,
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        indexed: false,
        name: 'toVault',
        type: 'bool[]',
      },
    ],
    name: 'SwapProposed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'proposer',
        type: 'address',
      },
    ],
    name: 'ProposalAccepted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'proposer',
        type: 'address',
      },
      {
        indexed: true,
        name: 'canceler',
        type: 'address',
      },
    ],
    name: 'ProposalCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'proposer',
        type: 'address',
      },
      {
        indexed: true,
        name: 'executor',
        type: 'address',
      },
      {
        indexed: false,
        name: 'oldBasket',
        type: 'address',
      },
      {
        indexed: false,
        name: 'newBasket',
        type: 'address',
      },
    ],
    name: 'ProposalExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'nominee',
        type: 'address',
      },
    ],
    name: 'NewOwnerNominated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
] as const
