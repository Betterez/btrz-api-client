export = infileJsonFactory;
/**
 * Query params for POST /infile-json (btrz-api-invoices). onlyValidateRequest optional.
 * @typedef {Object} InvoiceInfileJsonPostQuery
 * @property {string} [onlyValidateRequest] - If true, only validates the payload and does not process it
 */
/**
 * Factory for Infile JSON invoice API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, validateCreate: function, validateVoid: function }}
 */
declare function infileJsonFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    validateCreate: Function;
    validateVoid: Function;
};
declare namespace infileJsonFactory {
    export { InvoiceInfileJsonPostQuery, InvoiceInfileJsonValidateVoidQuery };
}
/**
 * Query params for GET /infile-json/validate-void (btrz-api-invoices).
 */
type InvoiceInfileJsonValidateVoidQuery = {
    /**
     * - Original sale transaction `_id` (24-character hex ObjectId)
     */
    originalTransactionId: string;
};
/**
 * Query params for POST /infile-json (btrz-api-invoices). onlyValidateRequest optional.
 */
type InvoiceInfileJsonPostQuery = {
    /**
     * - If true, only validates the payload and does not process it
     */
    onlyValidateRequest?: string;
};
