export = stationsZonesFactory;
/**
 * @typedef {Object} StationsZonesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for stations/zones API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function stationsZonesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace stationsZonesFactory {
    export { StationsZonesQuery };
}
type StationsZonesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
