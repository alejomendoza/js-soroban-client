import { FeeBumpTransaction, Transaction, TransactionBuilder } from "stellar-base";
import { SorobanRpc } from "./soroban_rpc";
/**
 * Combines the given raw transaction alongside the simulation results.
 *
 * @param raw   the initial transaction, w/o simulation applied
 * @param networkPassphrase  the network this simulation applies to (see
 *    {@link Networks} for options)
 * @param simulation  the Soroban RPC simulation result (see
 *    {@link Server.simulateTransaction})
 *
 * @returns a new, cloned transaction with the proper auth and resource (fee,
 *    footprint) simulation data applied
 *
 * @note if the given transaction already has authorization entries in a host
 *    function invocation (see {@link Operation.invokeHostFunction}), **the
 *    simulation entries are ignored**.
 *
 * @see {Server.simulateTransaction}
 * @see {Server.prepareTransaction}
 */
export declare function assembleTransaction(raw: Transaction | FeeBumpTransaction, networkPassphrase: string, simulation: SorobanRpc.SimulateTransactionResponse | SorobanRpc.RawSimulateTransactionResponse): TransactionBuilder;
/**
 * Converts a raw response schema into one with parsed XDR fields and a
 * simplified interface.
 *
 * @param raw   the raw response schema (parsed ones are allowed, best-effort
 *    detected, and returned untouched)
 *
 * @returns the original parameter (if already parsed), parsed otherwise
 */
export declare function parseRawSimulation(sim: SorobanRpc.SimulateTransactionResponse | SorobanRpc.RawSimulateTransactionResponse): SorobanRpc.SimulateTransactionResponse;
