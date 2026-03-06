export = redeemableItemsFactory;
/**
 * @typedef {Object} RedeemableItemsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for redeemable-items API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, getValid: function }}
 */
declare function redeemableItemsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    getValid: Function;
};
declare namespace redeemableItemsFactory {
    export { RedeemableItemsQuery };
}
type RedeemableItemsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
