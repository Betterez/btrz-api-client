export = infileFactory;
/**
 * Query params for POST /infile (btrz-api-invoices). onlyValidateRequest optional.
 * @typedef {Object} InvoiceInfilePostQuery
 * @property {string} [onlyValidateRequest] - If true, only validates the payload and does not process it
 */
/**
 * Factory for Infile invoice API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, validateCreate: function }}
 */
declare function infileFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    validateCreate: Function;
};
declare namespace infileFactory {
    export { InvoiceInfilePostQuery };
}
/**
 * Query params for POST /infile (btrz-api-invoices). onlyValidateRequest optional.
 */
type InvoiceInfilePostQuery = {
    /**
     * - If true, only validates the payload and does not process it
     */
    onlyValidateRequest?: string;
};
