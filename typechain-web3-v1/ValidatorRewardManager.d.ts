/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AllowedClaimRecipientsChanged = ContractEventLog<{
  rewardOwner: string;
  recipients: string[];
  0: string;
  1: string[];
}>;
export type ClaimExecutorsChanged = ContractEventLog<{
  rewardOwner: string;
  executors: string[];
  0: string;
  1: string[];
}>;
export type DailyAuthorizedInflationSet = ContractEventLog<{
  authorizedAmountWei: string;
  0: string;
}>;
export type GovernanceCallTimelocked = ContractEventLog<{
  selector: string;
  allowedAfterTimestamp: string;
  encodedCall: string;
  0: string;
  1: string;
  2: string;
}>;
export type GovernanceInitialised = ContractEventLog<{
  initialGovernance: string;
  0: string;
}>;
export type GovernedProductionModeEntered = ContractEventLog<{
  governanceSettings: string;
  0: string;
}>;
export type InflationReceived = ContractEventLog<{
  amountReceivedWei: string;
  0: string;
}>;
export type RewardClaimed = ContractEventLog<{
  beneficiary: string;
  sentTo: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type RewardManagerActivated = ContractEventLog<{
  rewardManager: string;
  0: string;
}>;
export type RewardManagerDeactivated = ContractEventLog<{
  rewardManager: string;
  0: string;
}>;
export type RewardsDistributed = ContractEventLog<{
  addresses: string[];
  rewards: string[];
  0: string[];
  1: string[];
}>;
export type TimelockedGovernanceCallCanceled = ContractEventLog<{
  selector: string;
  timestamp: string;
  0: string;
  1: string;
}>;
export type TimelockedGovernanceCallExecuted = ContractEventLog<{
  selector: string;
  timestamp: string;
  0: string;
  1: string;
}>;

export interface ValidatorRewardManager extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ValidatorRewardManager;
  clone(): ValidatorRewardManager;
  methods: {
    activate(): NonPayableTransactionObject<void>;

    active(): NonPayableTransactionObject<boolean>;

    allowedClaimRecipients(
      _rewardOwner: string
    ): NonPayableTransactionObject<string[]>;

    cancelGovernanceCall(
      _selector: string | number[]
    ): NonPayableTransactionObject<void>;

    claim(
      _rewardOwner: string,
      _recipient: string,
      _rewardAmount: number | string | BN,
      _wrap: boolean
    ): NonPayableTransactionObject<void>;

    claimExecutors(_rewardOwner: string): NonPayableTransactionObject<string[]>;

    deactivate(): NonPayableTransactionObject<void>;

    distributeRewards(
      _addresses: string[],
      _rewardAmounts: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    executeGovernanceCall(
      _selector: string | number[]
    ): NonPayableTransactionObject<void>;

    getAddressUpdater(): NonPayableTransactionObject<string>;

    getContractName(): NonPayableTransactionObject<string>;

    getExpectedBalance(): NonPayableTransactionObject<string>;

    getInflationAddress(): NonPayableTransactionObject<string>;

    getStateOfRewards(_beneficiary: string): NonPayableTransactionObject<{
      _totalReward: string;
      _claimedReward: string;
      0: string;
      1: string;
    }>;

    getTokenPoolSupplyData(): NonPayableTransactionObject<{
      _lockedFundsWei: string;
      _totalInflationAuthorizedWei: string;
      _totalClaimedWei: string;
      0: string;
      1: string;
      2: string;
    }>;

    getTotals(): NonPayableTransactionObject<{
      _totalAwardedWei: string;
      _totalClaimedWei: string;
      _totalInflationAuthorizedWei: string;
      _totalInflationReceivedWei: string;
      _lastInflationAuthorizationReceivedTs: string;
      _dailyAuthorizedInflation: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    governance(): NonPayableTransactionObject<string>;

    governanceSettings(): NonPayableTransactionObject<string>;

    initialise(_initialGovernance: string): NonPayableTransactionObject<void>;

    newRewardManager(): NonPayableTransactionObject<string>;

    oldRewardManager(): NonPayableTransactionObject<string>;

    productionMode(): NonPayableTransactionObject<boolean>;

    receiveInflation(): PayableTransactionObject<void>;

    rewardDistributor(): NonPayableTransactionObject<string>;

    setAllowedClaimRecipients(
      _recipients: string[]
    ): NonPayableTransactionObject<void>;

    setClaimExecutors(_executors: string[]): NonPayableTransactionObject<void>;

    setDailyAuthorizedInflation(
      _toAuthorizeWei: number | string | BN
    ): NonPayableTransactionObject<void>;

    setNewRewardManager(
      _newRewardManager: string
    ): NonPayableTransactionObject<void>;

    setRewardDistributor(
      _rewardDistributor: string
    ): NonPayableTransactionObject<void>;

    switchToProductionMode(): NonPayableTransactionObject<void>;

    timelockedCalls(arg0: string | number[]): NonPayableTransactionObject<{
      allowedAfterTimestamp: string;
      encodedCall: string;
      0: string;
      1: string;
    }>;

    updateContractAddresses(
      _contractNameHashes: (string | number[])[],
      _contractAddresses: string[]
    ): NonPayableTransactionObject<void>;

    wNat(): NonPayableTransactionObject<string>;
  };
  events: {
    AllowedClaimRecipientsChanged(
      cb?: Callback<AllowedClaimRecipientsChanged>
    ): EventEmitter;
    AllowedClaimRecipientsChanged(
      options?: EventOptions,
      cb?: Callback<AllowedClaimRecipientsChanged>
    ): EventEmitter;

    ClaimExecutorsChanged(cb?: Callback<ClaimExecutorsChanged>): EventEmitter;
    ClaimExecutorsChanged(
      options?: EventOptions,
      cb?: Callback<ClaimExecutorsChanged>
    ): EventEmitter;

    DailyAuthorizedInflationSet(
      cb?: Callback<DailyAuthorizedInflationSet>
    ): EventEmitter;
    DailyAuthorizedInflationSet(
      options?: EventOptions,
      cb?: Callback<DailyAuthorizedInflationSet>
    ): EventEmitter;

    GovernanceCallTimelocked(
      cb?: Callback<GovernanceCallTimelocked>
    ): EventEmitter;
    GovernanceCallTimelocked(
      options?: EventOptions,
      cb?: Callback<GovernanceCallTimelocked>
    ): EventEmitter;

    GovernanceInitialised(cb?: Callback<GovernanceInitialised>): EventEmitter;
    GovernanceInitialised(
      options?: EventOptions,
      cb?: Callback<GovernanceInitialised>
    ): EventEmitter;

    GovernedProductionModeEntered(
      cb?: Callback<GovernedProductionModeEntered>
    ): EventEmitter;
    GovernedProductionModeEntered(
      options?: EventOptions,
      cb?: Callback<GovernedProductionModeEntered>
    ): EventEmitter;

    InflationReceived(cb?: Callback<InflationReceived>): EventEmitter;
    InflationReceived(
      options?: EventOptions,
      cb?: Callback<InflationReceived>
    ): EventEmitter;

    RewardClaimed(cb?: Callback<RewardClaimed>): EventEmitter;
    RewardClaimed(
      options?: EventOptions,
      cb?: Callback<RewardClaimed>
    ): EventEmitter;

    RewardManagerActivated(cb?: Callback<RewardManagerActivated>): EventEmitter;
    RewardManagerActivated(
      options?: EventOptions,
      cb?: Callback<RewardManagerActivated>
    ): EventEmitter;

    RewardManagerDeactivated(
      cb?: Callback<RewardManagerDeactivated>
    ): EventEmitter;
    RewardManagerDeactivated(
      options?: EventOptions,
      cb?: Callback<RewardManagerDeactivated>
    ): EventEmitter;

    RewardsDistributed(cb?: Callback<RewardsDistributed>): EventEmitter;
    RewardsDistributed(
      options?: EventOptions,
      cb?: Callback<RewardsDistributed>
    ): EventEmitter;

    TimelockedGovernanceCallCanceled(
      cb?: Callback<TimelockedGovernanceCallCanceled>
    ): EventEmitter;
    TimelockedGovernanceCallCanceled(
      options?: EventOptions,
      cb?: Callback<TimelockedGovernanceCallCanceled>
    ): EventEmitter;

    TimelockedGovernanceCallExecuted(
      cb?: Callback<TimelockedGovernanceCallExecuted>
    ): EventEmitter;
    TimelockedGovernanceCallExecuted(
      options?: EventOptions,
      cb?: Callback<TimelockedGovernanceCallExecuted>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "AllowedClaimRecipientsChanged",
    cb: Callback<AllowedClaimRecipientsChanged>
  ): void;
  once(
    event: "AllowedClaimRecipientsChanged",
    options: EventOptions,
    cb: Callback<AllowedClaimRecipientsChanged>
  ): void;

  once(
    event: "ClaimExecutorsChanged",
    cb: Callback<ClaimExecutorsChanged>
  ): void;
  once(
    event: "ClaimExecutorsChanged",
    options: EventOptions,
    cb: Callback<ClaimExecutorsChanged>
  ): void;

  once(
    event: "DailyAuthorizedInflationSet",
    cb: Callback<DailyAuthorizedInflationSet>
  ): void;
  once(
    event: "DailyAuthorizedInflationSet",
    options: EventOptions,
    cb: Callback<DailyAuthorizedInflationSet>
  ): void;

  once(
    event: "GovernanceCallTimelocked",
    cb: Callback<GovernanceCallTimelocked>
  ): void;
  once(
    event: "GovernanceCallTimelocked",
    options: EventOptions,
    cb: Callback<GovernanceCallTimelocked>
  ): void;

  once(
    event: "GovernanceInitialised",
    cb: Callback<GovernanceInitialised>
  ): void;
  once(
    event: "GovernanceInitialised",
    options: EventOptions,
    cb: Callback<GovernanceInitialised>
  ): void;

  once(
    event: "GovernedProductionModeEntered",
    cb: Callback<GovernedProductionModeEntered>
  ): void;
  once(
    event: "GovernedProductionModeEntered",
    options: EventOptions,
    cb: Callback<GovernedProductionModeEntered>
  ): void;

  once(event: "InflationReceived", cb: Callback<InflationReceived>): void;
  once(
    event: "InflationReceived",
    options: EventOptions,
    cb: Callback<InflationReceived>
  ): void;

  once(event: "RewardClaimed", cb: Callback<RewardClaimed>): void;
  once(
    event: "RewardClaimed",
    options: EventOptions,
    cb: Callback<RewardClaimed>
  ): void;

  once(
    event: "RewardManagerActivated",
    cb: Callback<RewardManagerActivated>
  ): void;
  once(
    event: "RewardManagerActivated",
    options: EventOptions,
    cb: Callback<RewardManagerActivated>
  ): void;

  once(
    event: "RewardManagerDeactivated",
    cb: Callback<RewardManagerDeactivated>
  ): void;
  once(
    event: "RewardManagerDeactivated",
    options: EventOptions,
    cb: Callback<RewardManagerDeactivated>
  ): void;

  once(event: "RewardsDistributed", cb: Callback<RewardsDistributed>): void;
  once(
    event: "RewardsDistributed",
    options: EventOptions,
    cb: Callback<RewardsDistributed>
  ): void;

  once(
    event: "TimelockedGovernanceCallCanceled",
    cb: Callback<TimelockedGovernanceCallCanceled>
  ): void;
  once(
    event: "TimelockedGovernanceCallCanceled",
    options: EventOptions,
    cb: Callback<TimelockedGovernanceCallCanceled>
  ): void;

  once(
    event: "TimelockedGovernanceCallExecuted",
    cb: Callback<TimelockedGovernanceCallExecuted>
  ): void;
  once(
    event: "TimelockedGovernanceCallExecuted",
    options: EventOptions,
    cb: Callback<TimelockedGovernanceCallExecuted>
  ): void;
}
