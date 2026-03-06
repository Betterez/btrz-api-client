export = transactionsFactory;
/**
 * @typedef {Object} TransactionsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for transactions API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} transactions API methods
 */
declare function transactionsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace transactionsFactory {
    export { TransactionsQuery };
}
type TransactionsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
