export = gtiFactory;
/**
 * Query params for POST /gti (btrz-api-invoices). onlyValidateRequest optional.
 * @typedef {Object} InvoiceGtiPostQuery
 * @property {string} [onlyValidateRequest] - If true, only validates the payload and does not process it
 */
/**
 * Factory for GTI invoice API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, validateCreate: function }}
 */
declare function gtiFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    validateCreate: Function;
};
declare namespace gtiFactory {
    export { InvoiceGtiPostQuery };
}
/**
 * Query params for POST /gti (btrz-api-invoices). onlyValidateRequest optional.
 */
type InvoiceGtiPostQuery = {
    /**
     * - If true, only validates the payload and does not process it
     */
    onlyValidateRequest?: string;
};
