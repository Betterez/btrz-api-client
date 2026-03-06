export = travellerCardProvidersTypesFactory;
/**
 * Query params for traveller-card-providers-types endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryTravellerCardProvidersTypesQuery
 */
/**
 * Factory for traveller-card-providers types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function travellerCardProvidersTypesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace travellerCardProvidersTypesFactory {
    export { InventoryTravellerCardProvidersTypesQuery };
}
/**
 * Query params for traveller-card-providers-types endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryTravellerCardProvidersTypesQuery = any;
