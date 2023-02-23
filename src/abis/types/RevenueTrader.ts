/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RevenueTraderInterface extends utils.Interface {
  functions: {
    "MAX_TRADE_SLIPPAGE()": FunctionFragment;
    "MAX_TRADE_VOLUME()": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "claimRewardsSingle(address)": FunctionFragment;
    "init(address,address,uint192,uint192)": FunctionFragment;
    "main()": FunctionFragment;
    "manageToken(address)": FunctionFragment;
    "maxTradeSlippage()": FunctionFragment;
    "minTradeVolume()": FunctionFragment;
    "mulDivCeil(uint192,uint192,uint192)": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "setMaxTradeSlippage(uint192)": FunctionFragment;
    "setMinTradeVolume(uint192)": FunctionFragment;
    "settleTrade(address)": FunctionFragment;
    "tokenToBuy()": FunctionFragment;
    "trades(address)": FunctionFragment;
    "tradesOpen()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_TRADE_SLIPPAGE"
      | "MAX_TRADE_VOLUME"
      | "claimRewards"
      | "claimRewardsSingle"
      | "init"
      | "main"
      | "manageToken"
      | "maxTradeSlippage"
      | "minTradeVolume"
      | "mulDivCeil"
      | "multicall"
      | "proxiableUUID"
      | "setMaxTradeSlippage"
      | "setMinTradeVolume"
      | "settleTrade"
      | "tokenToBuy"
      | "trades"
      | "tradesOpen"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_TRADE_SLIPPAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_TRADE_VOLUME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardsSingle",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "main", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "manageToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxTradeSlippage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minTradeVolume",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mulDivCeil",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxTradeSlippage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinTradeVolume",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "settleTrade",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToBuy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "trades",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tradesOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MAX_TRADE_SLIPPAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_TRADE_VOLUME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardsSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "main", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "manageToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTradeSlippage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minTradeVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mulDivCeil", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxTradeSlippage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinTradeVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenToBuy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "trades", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tradesOpen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "MaxTradeSlippageSet(uint192,uint192)": EventFragment;
    "MinTradeVolumeSet(uint192,uint192)": EventFragment;
    "RewardsClaimed(address,uint256)": EventFragment;
    "TradeSettled(address,address,address,uint256,uint256)": EventFragment;
    "TradeStarted(address,address,address,uint256,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MaxTradeSlippageSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinTradeVolumeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface MaxTradeSlippageSetEventObject {
  oldVal: BigNumber;
  newVal: BigNumber;
}
export type MaxTradeSlippageSetEvent = TypedEvent<
  [BigNumber, BigNumber],
  MaxTradeSlippageSetEventObject
>;

export type MaxTradeSlippageSetEventFilter =
  TypedEventFilter<MaxTradeSlippageSetEvent>;

export interface MinTradeVolumeSetEventObject {
  oldVal: BigNumber;
  newVal: BigNumber;
}
export type MinTradeVolumeSetEvent = TypedEvent<
  [BigNumber, BigNumber],
  MinTradeVolumeSetEventObject
>;

export type MinTradeVolumeSetEventFilter =
  TypedEventFilter<MinTradeVolumeSetEvent>;

export interface RewardsClaimedEventObject {
  erc20: string;
  amount: BigNumber;
}
export type RewardsClaimedEvent = TypedEvent<
  [string, BigNumber],
  RewardsClaimedEventObject
>;

export type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;

export interface TradeSettledEventObject {
  trade: string;
  sell: string;
  buy: string;
  sellAmount: BigNumber;
  buyAmount: BigNumber;
}
export type TradeSettledEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TradeSettledEventObject
>;

export type TradeSettledEventFilter = TypedEventFilter<TradeSettledEvent>;

export interface TradeStartedEventObject {
  trade: string;
  sell: string;
  buy: string;
  sellAmount: BigNumber;
  minBuyAmount: BigNumber;
}
export type TradeStartedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TradeStartedEventObject
>;

export type TradeStartedEventFilter = TypedEventFilter<TradeStartedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface RevenueTrader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RevenueTraderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX_TRADE_SLIPPAGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_TRADE_VOLUME(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimRewardsSingle(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    init(
      main_: PromiseOrValue<string>,
      tokenToBuy_: PromiseOrValue<string>,
      maxTradeSlippage_: PromiseOrValue<BigNumberish>,
      minTradeVolume_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    main(overrides?: CallOverrides): Promise<[string]>;

    manageToken(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxTradeSlippage(overrides?: CallOverrides): Promise<[BigNumber]>;

    minTradeVolume(overrides?: CallOverrides): Promise<[BigNumber]>;

    mulDivCeil(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      z: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    setMaxTradeSlippage(
      val: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinTradeVolume(
      val: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settleTrade(
      sell: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenToBuy(overrides?: CallOverrides): Promise<[string]>;

    trades(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tradesOpen(overrides?: CallOverrides): Promise<[number]>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_TRADE_SLIPPAGE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_TRADE_VOLUME(overrides?: CallOverrides): Promise<BigNumber>;

  claimRewards(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimRewardsSingle(
    erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  init(
    main_: PromiseOrValue<string>,
    tokenToBuy_: PromiseOrValue<string>,
    maxTradeSlippage_: PromiseOrValue<BigNumberish>,
    minTradeVolume_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  main(overrides?: CallOverrides): Promise<string>;

  manageToken(
    erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxTradeSlippage(overrides?: CallOverrides): Promise<BigNumber>;

  minTradeVolume(overrides?: CallOverrides): Promise<BigNumber>;

  mulDivCeil(
    x: PromiseOrValue<BigNumberish>,
    y: PromiseOrValue<BigNumberish>,
    z: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  setMaxTradeSlippage(
    val: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinTradeVolume(
    val: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settleTrade(
    sell: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenToBuy(overrides?: CallOverrides): Promise<string>;

  trades(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  tradesOpen(overrides?: CallOverrides): Promise<number>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_TRADE_SLIPPAGE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TRADE_VOLUME(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(overrides?: CallOverrides): Promise<void>;

    claimRewardsSingle(
      erc20: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    init(
      main_: PromiseOrValue<string>,
      tokenToBuy_: PromiseOrValue<string>,
      maxTradeSlippage_: PromiseOrValue<BigNumberish>,
      minTradeVolume_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    main(overrides?: CallOverrides): Promise<string>;

    manageToken(
      erc20: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    maxTradeSlippage(overrides?: CallOverrides): Promise<BigNumber>;

    minTradeVolume(overrides?: CallOverrides): Promise<BigNumber>;

    mulDivCeil(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      z: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    setMaxTradeSlippage(
      val: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinTradeVolume(
      val: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settleTrade(
      sell: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenToBuy(overrides?: CallOverrides): Promise<string>;

    trades(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    tradesOpen(overrides?: CallOverrides): Promise<number>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "MaxTradeSlippageSet(uint192,uint192)"(
      oldVal?: PromiseOrValue<BigNumberish> | null,
      newVal?: PromiseOrValue<BigNumberish> | null
    ): MaxTradeSlippageSetEventFilter;
    MaxTradeSlippageSet(
      oldVal?: PromiseOrValue<BigNumberish> | null,
      newVal?: PromiseOrValue<BigNumberish> | null
    ): MaxTradeSlippageSetEventFilter;

    "MinTradeVolumeSet(uint192,uint192)"(
      oldVal?: PromiseOrValue<BigNumberish> | null,
      newVal?: PromiseOrValue<BigNumberish> | null
    ): MinTradeVolumeSetEventFilter;
    MinTradeVolumeSet(
      oldVal?: PromiseOrValue<BigNumberish> | null,
      newVal?: PromiseOrValue<BigNumberish> | null
    ): MinTradeVolumeSetEventFilter;

    "RewardsClaimed(address,uint256)"(
      erc20?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): RewardsClaimedEventFilter;
    RewardsClaimed(
      erc20?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): RewardsClaimedEventFilter;

    "TradeSettled(address,address,address,uint256,uint256)"(
      trade?: PromiseOrValue<string> | null,
      sell?: PromiseOrValue<string> | null,
      buy?: PromiseOrValue<string> | null,
      sellAmount?: null,
      buyAmount?: null
    ): TradeSettledEventFilter;
    TradeSettled(
      trade?: PromiseOrValue<string> | null,
      sell?: PromiseOrValue<string> | null,
      buy?: PromiseOrValue<string> | null,
      sellAmount?: null,
      buyAmount?: null
    ): TradeSettledEventFilter;

    "TradeStarted(address,address,address,uint256,uint256)"(
      trade?: PromiseOrValue<string> | null,
      sell?: PromiseOrValue<string> | null,
      buy?: PromiseOrValue<string> | null,
      sellAmount?: null,
      minBuyAmount?: null
    ): TradeStartedEventFilter;
    TradeStarted(
      trade?: PromiseOrValue<string> | null,
      sell?: PromiseOrValue<string> | null,
      buy?: PromiseOrValue<string> | null,
      sellAmount?: null,
      minBuyAmount?: null
    ): TradeStartedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    MAX_TRADE_SLIPPAGE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TRADE_VOLUME(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimRewardsSingle(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    init(
      main_: PromiseOrValue<string>,
      tokenToBuy_: PromiseOrValue<string>,
      maxTradeSlippage_: PromiseOrValue<BigNumberish>,
      minTradeVolume_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    main(overrides?: CallOverrides): Promise<BigNumber>;

    manageToken(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maxTradeSlippage(overrides?: CallOverrides): Promise<BigNumber>;

    minTradeVolume(overrides?: CallOverrides): Promise<BigNumber>;

    mulDivCeil(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      z: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxTradeSlippage(
      val: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinTradeVolume(
      val: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settleTrade(
      sell: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenToBuy(overrides?: CallOverrides): Promise<BigNumber>;

    trades(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tradesOpen(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_TRADE_SLIPPAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_TRADE_VOLUME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimRewardsSingle(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    init(
      main_: PromiseOrValue<string>,
      tokenToBuy_: PromiseOrValue<string>,
      maxTradeSlippage_: PromiseOrValue<BigNumberish>,
      minTradeVolume_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    main(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manageToken(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxTradeSlippage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minTradeVolume(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mulDivCeil(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      z: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMaxTradeSlippage(
      val: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinTradeVolume(
      val: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settleTrade(
      sell: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenToBuy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    trades(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tradesOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}