export = taxIdsFactory;
/**
 * Query params for GET /tax-ids (btrz-api-invoices getSpec).
 * @typedef {Object} TaxIdsListQuery
 * @property {string} taxNumber - Tax number to look up (required)
 * @property {string} country - ISO code of the country of the tax information (required)
 * @property {string} [invoiceProviderId] - Invoice provider id (24 hex chars)
 * @property {string} [documentType] - Tax identification type to check against validation service
 */
/**
 * Factory for invoice tax IDs API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function taxIdsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace taxIdsFactory {
    export { TaxIdsListQuery };
}
/**
 * Query params for GET /tax-ids (btrz-api-invoices getSpec).
 */
type TaxIdsListQuery = {
    /**
     * - Tax number to look up (required)
     */
    taxNumber: string;
    /**
     * - ISO code of the country of the tax information (required)
     */
    country: string;
    /**
     * - Invoice provider id (24 hex chars)
     */
    invoiceProviderId?: string;
    /**
     * - Tax identification type to check against validation service
     */
    documentType?: string;
};
