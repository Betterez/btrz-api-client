export = parcelFactory;
/**
 * @typedef {Object} ParcelsQuery
 * @property {string} [providerId] - Provider account ID (also set via opts.providerId)
 */
/**
 * Factory for parcels API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} parcels API methods
 */
declare function parcelFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace parcelFactory {
    export { ParcelsQuery };
}
type ParcelsQuery = {
    /**
     * - Provider account ID (also set via opts.providerId)
     */
    providerId?: string;
};
