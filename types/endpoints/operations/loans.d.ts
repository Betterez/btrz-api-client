export = loansFactory;
/**
 * @typedef {Object} LoansQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for loans API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} loans API methods
 */
declare function loansFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace loansFactory {
    export { LoansQuery };
}
type LoansQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
