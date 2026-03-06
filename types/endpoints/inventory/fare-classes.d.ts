export = fareClassesFactory;
/**
 * Query params for fare-classes endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryFareClassesQuery
 */
/**
 * Factory for fare-classes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function }}
 */
declare function fareClassesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    update: Function;
};
declare namespace fareClassesFactory {
    export { InventoryFareClassesQuery };
}
/**
 * Query params for fare-classes endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryFareClassesQuery = any;
