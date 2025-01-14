export type Id = string | number;
export interface Request<T> {
    jsonrpc: "2.0";
    id: Id;
    method: string;
    params: T;
}
export interface Notification<T> {
    jsonrpc: "2.0";
    method: string;
    params?: T;
}
export type Response<T, E = any> = {
    jsonrpc: "2.0";
    id: Id;
} & ({
    error: Error<E>;
} | {
    result: T;
});
export interface Error<E = any> {
    code: number;
    message?: string;
    data?: E;
}
/**
 * Sends the jsonrpc 'params' as an array.
 */
export declare function post<T>(url: string, method: string, ...params: any): Promise<T>;
/**
 * Sends the jsonrpc 'params' as the single 'param' obj, no array wrapper is applied.
 */
export declare function postObject<T>(url: string, method: string, param: any): Promise<T>;
