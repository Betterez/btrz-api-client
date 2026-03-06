export = invoicesFactory;
/**
 * Query params for invoices endpoints (btrz-api-invoices). Forwarded to API as-is.
 * @typedef {Object} InvoicesQuery
 */
/**
 * Factory for invoices API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, getInvoicesFailures: function, retryInvoicing: function, overrideBuyerRetryInvoicing: function }}
 */
declare function invoicesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    getInvoicesFailures: Function;
    retryInvoicing: Function;
    overrideBuyerRetryInvoicing: Function;
};
declare namespace invoicesFactory {
    export { InvoicesQuery };
}
/**
 * Query params for invoices endpoints (btrz-api-invoices). Forwarded to API as-is.
 */
type InvoicesQuery = any;
