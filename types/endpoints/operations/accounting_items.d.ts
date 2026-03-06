export = accountingItemsFactory;
/**
 * @typedef {Object} AccountingItemsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for accounting-items API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} accounting-items API methods
 */
declare function accountingItemsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace accountingItemsFactory {
    export { AccountingItemsQuery };
}
type AccountingItemsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
