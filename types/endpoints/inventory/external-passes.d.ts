export = externalPassesFactory;
/**
 * @typedef {Object} ExternalPassesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for external-passes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */
declare function externalPassesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
};
declare namespace externalPassesFactory {
    export { ExternalPassesQuery };
}
type ExternalPassesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
