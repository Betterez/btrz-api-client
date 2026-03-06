export = tripsFactory;
/**
 * Query params for GET /trips (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryTripsListQuery
 */
/**
 * Factory for trips API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */
declare function tripsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
};
declare namespace tripsFactory {
    export { InventoryTripsListQuery };
}
/**
 * Query params for GET /trips (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryTripsListQuery = any;
