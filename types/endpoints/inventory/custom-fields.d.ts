export = customFieldsFactory;
/**
 * Query params for custom-fields endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryCustomFieldsQuery
 */
/**
 * Factory for custom-fields API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, types: object }}
 */
declare function customFieldsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    types: object;
};
declare namespace customFieldsFactory {
    export { InventoryCustomFieldsQuery };
}
/**
 * Query params for custom-fields endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryCustomFieldsQuery = any;
