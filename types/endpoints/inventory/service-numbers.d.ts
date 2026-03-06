export = serviceNumbersFactory;
/**
 * Query params for service-numbers endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryServiceNumbersQuery
 */
/**
 * Factory for service-numbers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */
declare function serviceNumbersFactory({ client, internalAuthTokenProvider }: {
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
declare namespace serviceNumbersFactory {
    export { InventoryServiceNumbersQuery };
}
/**
 * Query params for service-numbers endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryServiceNumbersQuery = any;
