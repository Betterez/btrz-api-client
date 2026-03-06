export = bundlesFactory;
/**
 * @typedef {Object} BundlesListQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for bundles API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function bundlesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace bundlesFactory {
    export { BundlesListQuery };
}
type BundlesListQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
