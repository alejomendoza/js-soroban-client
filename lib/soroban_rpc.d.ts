import { AssetType, SorobanDataBuilder, xdr } from "stellar-base";
/**
 * @namespace SorobanRpc
 */
export declare namespace SorobanRpc {
    export interface Balance {
        asset_type: AssetType.credit4 | AssetType.credit12;
        asset_code: string;
        asset_issuer: string;
        classic: string;
        smart: string;
    }
    export interface Cost {
        cpuInsns: string;
        memBytes: string;
    }
    export interface GetHealthResponse {
        status: "healthy";
    }
    export interface LedgerEntryResult {
        key: string;
        xdr: string;
        lastModifiedLedgerSeq?: number;
    }
    export interface GetLedgerEntriesResponse {
        entries: LedgerEntryResult[] | null;
        latestLedger: number;
    }
    export interface GetNetworkResponse {
        friendbotUrl?: string;
        passphrase: string;
        protocolVersion: string;
    }
    export interface GetLatestLedgerResponse {
        id: string;
        sequence: number;
        protocolVersion: string;
    }
    export enum GetTransactionStatus {
        SUCCESS = "SUCCESS",
        NOT_FOUND = "NOT_FOUND",
        FAILED = "FAILED"
    }
    export type GetTransactionResponse = GetSuccessfulTransactionResponse | GetFailedTransactionResponse | GetMissingTransactionResponse;
    interface GetAnyTransactionResponse {
        status: GetTransactionStatus;
        latestLedger: number;
        latestLedgerCloseTime: number;
        oldestLedger: number;
        oldestLedgerCloseTime: number;
    }
    export interface GetMissingTransactionResponse extends GetAnyTransactionResponse {
        status: GetTransactionStatus.NOT_FOUND;
    }
    export interface GetFailedTransactionResponse extends GetAnyTransactionResponse {
        status: GetTransactionStatus.FAILED;
    }
    export interface GetSuccessfulTransactionResponse extends GetAnyTransactionResponse {
        status: GetTransactionStatus.SUCCESS;
        ledger: number;
        createdAt: number;
        applicationOrder: number;
        feeBump: boolean;
        envelopeXdr: xdr.TransactionEnvelope;
        resultXdr: xdr.TransactionResult;
        resultMetaXdr: xdr.TransactionMeta;
        returnValue?: xdr.ScVal;
    }
    export interface RawGetTransactionResponse {
        status: GetTransactionStatus;
        latestLedger: number;
        latestLedgerCloseTime: number;
        oldestLedger: number;
        oldestLedgerCloseTime: number;
        applicationOrder?: number;
        feeBump?: boolean;
        envelopeXdr?: string;
        resultXdr?: string;
        resultMetaXdr?: string;
        ledger?: number;
        createdAt?: number;
    }
    export type EventType = "contract" | "system" | "diagnostic";
    export interface EventFilter {
        type?: EventType;
        contractIds?: string[];
        topics?: string[][];
    }
    export interface GetEventsResponse {
        events?: EventResponse[];
    }
    export interface EventResponse {
        type: EventType;
        ledger: string;
        ledgerClosedAt: string;
        contractId: string;
        id: string;
        pagingToken: string;
        inSuccessfulContractCall: boolean;
        topic: string[];
        value: {
            xdr: string;
        };
    }
    export interface RequestAirdropResponse {
        transaction_id: string;
    }
    export type SendTransactionStatus = "PENDING" | "DUPLICATE" | "TRY_AGAIN_LATER" | "ERROR";
    export interface SendTransactionResponse {
        status: SendTransactionStatus;
        errorResultXdr?: string;
        hash: string;
        latestLedger: number;
        latestLedgerCloseTime: number;
    }
    export interface SimulateHostFunctionResult {
        auth: xdr.SorobanAuthorizationEntry[];
        retval: xdr.ScVal;
    }
    export interface SimulateTransactionResponse {
        id: string;
        error?: string;
        transactionData: SorobanDataBuilder;
        events: xdr.DiagnosticEvent[];
        minResourceFee: string;
        result?: SimulateHostFunctionResult;
        latestLedger: number;
        cost: Cost;
    }
    export interface RawSimulateHostFunctionResult {
        auth?: string[];
        xdr: string;
    }
    export interface RawSimulateTransactionResponse {
        id: string;
        error?: string;
        transactionData: string;
        events: string[];
        minResourceFee: string;
        results?: RawSimulateHostFunctionResult[];
        latestLedger: number;
        cost: Cost;
    }
    export {};
}
