export = soldItemsFulfillmentFactory;
/**
 * @typedef {Object} SoldItemsFulfillmentQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for sold-items fulfillment API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} sold-items fulfillment API methods
 */
declare function soldItemsFulfillmentFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace soldItemsFulfillmentFactory {
    export { SoldItemsFulfillmentQuery };
}
type SoldItemsFulfillmentQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
