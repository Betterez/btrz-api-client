export = travellerCardTypesFactory;
/**
 * Query params for GET /traveller-card-types (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryTravellerCardTypesListQuery
 */
/**
 * Factory for traveller-card-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function, remove: function }}
 */
declare function travellerCardTypesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    update: Function;
    get: Function;
    remove: Function;
};
declare namespace travellerCardTypesFactory {
    export { InventoryTravellerCardTypesListQuery };
}
/**
 * Query params for GET /traveller-card-types (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryTravellerCardTypesListQuery = any;
