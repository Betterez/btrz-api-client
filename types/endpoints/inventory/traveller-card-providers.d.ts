export = travellerCardProvidersFactory;
/**
 * Query params for GET /traveller-card-providers (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryTravellerCardProvidersListQuery
 */
/**
 * Factory for traveller-card-providers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */
declare function travellerCardProvidersFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    update: Function;
    get: Function;
};
declare namespace travellerCardProvidersFactory {
    export { InventoryTravellerCardProvidersListQuery };
}
/**
 * Query params for GET /traveller-card-providers (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryTravellerCardProvidersListQuery = any;
