export = stationsFactory;
/**
 * @typedef {Object} StationsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for stations API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function }}
 */
declare function stationsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    all: Function;
    create: Function;
    update: Function;
};
declare namespace stationsFactory {
    export { StationsQuery };
}
type StationsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
