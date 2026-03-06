export = maritalStatusFactory;
/**
 * Query params for marital-status endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryMaritalStatusQuery
 */
/**
 * Factory for marital-status API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */
declare function maritalStatusFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    update: Function;
    remove: Function;
    create: Function;
};
declare namespace maritalStatusFactory {
    export { InventoryMaritalStatusQuery };
}
/**
 * Query params for marital-status endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryMaritalStatusQuery = any;
