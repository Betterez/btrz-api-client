export = customContentFactory;
/**
 * Query params for custom-content endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryCustomContentQuery
 */
/**
 * Factory for custom-content API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function customContentFactory({ client, internalAuthTokenProvider }: {
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
declare namespace customContentFactory {
    export { InventoryCustomContentQuery };
}
/**
 * Query params for custom-content endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryCustomContentQuery = any;
