export = dlinkFactory;
/**
 * Query params for POST /dlink (btrz-api-invoices). onlyValidateRequest optional.
 * @typedef {Object} InvoiceDlinkPostQuery
 * @property {string} [onlyValidateRequest] - If true, only validates the payload and does not process it
 */
/**
 * Factory for DLink invoice API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, validateCreate: function }}
 */
declare function dlinkFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    validateCreate: Function;
};
declare namespace dlinkFactory {
    export { InvoiceDlinkPostQuery };
}
/**
 * Query params for POST /dlink (btrz-api-invoices). onlyValidateRequest optional.
 */
type InvoiceDlinkPostQuery = {
    /**
     * - If true, only validates the payload and does not process it
     */
    onlyValidateRequest?: string;
};
