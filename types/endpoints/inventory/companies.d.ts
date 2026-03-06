export = companiesFactory;
/**
 * Query params for companies endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryCompaniesQuery
 */
/**
 * Factory for companies API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function companiesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace companiesFactory {
    export { InventoryCompaniesQuery };
}
/**
 * Query params for companies endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryCompaniesQuery = any;
