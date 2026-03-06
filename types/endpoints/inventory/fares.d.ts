export = faresFactory;
/**
 * Query params for fares endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryFaresQuery
 */
/**
 * Factory for fares API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, create: function, adjustments: { create: function, remove: function } }}
 */
declare function faresFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    update: Function;
    create: Function;
    adjustments: {
        create: Function;
        remove: Function;
    };
};
declare namespace faresFactory {
    export { InventoryFaresQuery };
}
/**
 * Query params for fares endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryFaresQuery = any;
