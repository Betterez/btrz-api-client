export = insurancesCostFactory;
/**
 * Query params for insurances cost endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryInsurancesCostQuery
 */
/**
 * Factory for insurances cost API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function insurancesCostFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace insurancesCostFactory {
    export { InventoryInsurancesCostQuery };
}
/**
 * Query params for insurances cost endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryInsurancesCostQuery = any;
