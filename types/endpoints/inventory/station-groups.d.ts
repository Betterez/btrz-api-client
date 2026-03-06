export = stationGroupsFactory;
/**
 * @typedef {Object} StationGroupsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for station-groups API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function stationGroupsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace stationGroupsFactory {
    export { StationGroupsQuery };
}
type StationGroupsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
