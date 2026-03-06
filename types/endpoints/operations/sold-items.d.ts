export = soldItems;
/**
 * @typedef {Object} SoldItemsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for sold-items API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} sold-items API methods
 */
declare function soldItems({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace soldItems {
    export { SoldItemsQuery };
}
type SoldItemsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
