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

export type AddressesRegistered = ContractEventLog<{
  publicKey: string;
  pAddress: string;
  cAddress: string;
  0: string;
  1: string;
  2: string;
}>;

export interface AddressBinder extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AddressBinder;
  clone(): AddressBinder;
  methods: {
    cAddressToPAddress(arg0: string): NonPayableTransactionObject<string>;

    pAddressToCAddress(
      arg0: string | number[]
    ): NonPayableTransactionObject<string>;

    registerAddresses(
      _publicKey: string | number[],
      _pAddress: string | number[],
      _cAddress: string
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AddressesRegistered(cb?: Callback<AddressesRegistered>): EventEmitter;
    AddressesRegistered(
      options?: EventOptions,
      cb?: Callback<AddressesRegistered>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AddressesRegistered", cb: Callback<AddressesRegistered>): void;
  once(
    event: "AddressesRegistered",
    options: EventOptions,
    cb: Callback<AddressesRegistered>
  ): void;
}
