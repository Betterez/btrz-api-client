export = zonePriceOverageFactory;
/**
 * Query params for zone-price-overages endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryZonePriceOveragesQuery
 */
/**
 * Factory for zone-price-overages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function zonePriceOverageFactory({ client, internalAuthTokenProvider }: {
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
declare namespace zonePriceOverageFactory {
    export { InventoryZonePriceOveragesQuery };
}
/**
 * Query params for zone-price-overages endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryZonePriceOveragesQuery = any;
