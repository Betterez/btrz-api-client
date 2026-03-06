export = feesFactory;
/**
 * Query params for fees endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryFeesQuery
 */
/**
 * Factory for fees API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
declare function feesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
};
declare namespace feesFactory {
    export { InventoryFeesQuery };
}
/**
 * Query params for fees endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryFeesQuery = any;
