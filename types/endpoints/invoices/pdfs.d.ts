export = pdfsFactory;
/**
 * Query params for GET /pdfs (btrz-api-invoices). Forwarded to API as-is.
 * @typedef {Object} InvoicePdfsListQuery
 */
/**
 * Factory for invoice PDFs API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function pdfsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace pdfsFactory {
    export { InvoicePdfsListQuery };
}
/**
 * Query params for GET /pdfs (btrz-api-invoices). Forwarded to API as-is.
 */
type InvoicePdfsListQuery = any;
