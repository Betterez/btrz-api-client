export = bundlesFactory;
/**
 * @typedef {Object} InventoryBundlesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for bundles API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */
declare function bundlesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
};
declare namespace bundlesFactory {
    export { InventoryBundlesQuery };
}
type InventoryBundlesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
