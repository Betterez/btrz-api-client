export = serviceTypesFactory;
/**
 * Query params for GET /service-types (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryServiceTypesListQuery
 */
/**
 * Factory for service-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function serviceTypesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace serviceTypesFactory {
    export { InventoryServiceTypesListQuery };
}
/**
 * Query params for GET /service-types (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryServiceTypesListQuery = any;
