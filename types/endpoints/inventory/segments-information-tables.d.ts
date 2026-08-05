export = segmentInformationTableFactory;
/**
 * @typedef {Object} SegmentsInformationTablesQuery
 * @property {string} [providerId] - Provider account ID when route belongs to a provider in the requester's network
 */
/**
 * Factory for segments-information-tables API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function segmentInformationTableFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace segmentInformationTableFactory {
    export { SegmentsInformationTablesQuery };
}
type SegmentsInformationTablesQuery = {
    /**
     * - Provider account ID when route belongs to a provider in the requester's network
     */
    providerId?: string;
};
