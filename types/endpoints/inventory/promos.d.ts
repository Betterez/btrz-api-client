export = promosFactory;
/**
 * Query params for promos endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryPromosQuery
 */
/**
 * Factory for promos API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, patch: function, remove: function, addRule: function, updateRule: function }}
 */
declare function promosFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    patch: Function;
    remove: Function;
    addRule: Function;
    updateRule: Function;
};
declare namespace promosFactory {
    export { InventoryPromosQuery };
}
/**
 * Query params for promos endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryPromosQuery = any;
