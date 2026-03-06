export = systemFactory;
/**
 * Query params for POST /system (btrz-api-invoices getSpec).
 * @typedef {Object} InvoiceSystemPostQuery
 * @property {string} [onlyValidateRequest] - If set to true, only validates the payload and does not process it
 */
/**
 * Factory for invoice system API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, validateCreate: function }}
 */
declare function systemFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    validateCreate: Function;
};
declare namespace systemFactory {
    export { InvoiceSystemPostQuery };
}
/**
 * Query params for POST /system (btrz-api-invoices getSpec).
 */
type InvoiceSystemPostQuery = {
    /**
     * - If set to true, only validates the payload and does not process it
     */
    onlyValidateRequest?: string;
};
