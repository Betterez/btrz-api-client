export = journeyPricesFactory;
/**
 * Query params for journey-prices endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryJourneyPricesQuery
 */
/**
 * Factory for journey-prices API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, deleteById: function, get: function, create: function, update: function }}
 */
declare function journeyPricesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    deleteById: Function;
    get: Function;
    create: Function;
    update: Function;
};
declare namespace journeyPricesFactory {
    export { InventoryJourneyPricesQuery };
}
/**
 * Query params for journey-prices endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryJourneyPricesQuery = any;
