export = seatClassesFactory;
/**
 * Query params for seat-classes endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventorySeatclassesQuery
 */
/**
 * Factory for seat-classes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */
declare function seatClassesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace seatClassesFactory {
    export { InventorySeatclassesQuery };
}
/**
 * Query params for seat-classes endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventorySeatclassesQuery = any;
