export = documentTypesFactory;
/**
 * @typedef {Object} DocumentTypesQuery
 * @property {string} [providerId] - Provider account ID (also set via opts.providerId)
 */
/**
 * Factory for document-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */
declare function documentTypesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    update: Function;
    remove: Function;
    create: Function;
};
declare namespace documentTypesFactory {
    export { DocumentTypesQuery };
}
type DocumentTypesQuery = {
    /**
     * - Provider account ID (also set via opts.providerId)
     */
    providerId?: string;
};
