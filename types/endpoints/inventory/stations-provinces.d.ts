export = stationsProvincesFactory;
/**
 * @typedef {Object} StationsProvincesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for stations/provinces API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function stationsProvincesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace stationsProvincesFactory {
    export { StationsProvincesQuery };
}
type StationsProvincesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
