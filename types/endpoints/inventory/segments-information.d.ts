export = segmentsInformationFactory;
/**
 * @typedef {Object} SegmentsInformationQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for segments-information API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function segmentsInformationFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    remove: Function;
};
declare namespace segmentsInformationFactory {
    export { SegmentsInformationQuery };
}
type SegmentsInformationQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
