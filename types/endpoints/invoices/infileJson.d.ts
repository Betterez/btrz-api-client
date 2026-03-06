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
 * @returns {{ create: function, validateCreate: function }}
 */
declare function infileJsonFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    validateCreate: Function;
};
declare namespace infileJsonFactory {
    export { InvoiceInfileJsonPostQuery };
}
/**
 * Query params for POST /infile-json (btrz-api-invoices). onlyValidateRequest optional.
 */
type InvoiceInfileJsonPostQuery = {
    /**
     * - If true, only validates the payload and does not process it
     */
    onlyValidateRequest?: string;
};
