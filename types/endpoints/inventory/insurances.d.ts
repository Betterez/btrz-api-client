export = insurancesFactory;
/**
 * Query params for insurances endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryInsurancesQuery
 */
/**
 * Factory for insurances API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, get: function, update: function, remove: function }}
 */
declare function insurancesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    get: Function;
    update: Function;
    remove: Function;
};
declare namespace insurancesFactory {
    export { InventoryInsurancesQuery };
}
/**
 * Query params for insurances endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryInsurancesQuery = any;
