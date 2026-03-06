export = zonePriceFactory;
/**
 * Query params for zone-prices endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryZonePricesQuery
 */
/**
 * Factory for zone-prices API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function zonePriceFactory({ client, internalAuthTokenProvider }: {
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
declare namespace zonePriceFactory {
    export { InventoryZonePricesQuery };
}
/**
 * Query params for zone-prices endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryZonePricesQuery = any;
