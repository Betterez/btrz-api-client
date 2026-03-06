export = manifestFactory;
/**
 * @typedef {Object} ManifestQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for manifests API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} manifest API methods
 */
declare function manifestFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace manifestFactory {
    export { ManifestQuery };
}
type ManifestQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
