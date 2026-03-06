export = operationMessagesFactory;
/**
 * Query params for operation-messages endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryOperationMessagesQuery
 */
/**
 * Factory for operation-messages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function, getByStation: function }}
 */
declare function operationMessagesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    all: Function;
    create: Function;
    update: Function;
    remove: Function;
    getByStation: Function;
};
declare namespace operationMessagesFactory {
    export { InventoryOperationMessagesQuery };
}
/**
 * Query params for operation-messages endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryOperationMessagesQuery = any;
