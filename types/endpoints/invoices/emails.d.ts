export = emailsFactory;
/**
 * Query params for POST /emails (btrz-api-invoices). Forwarded to API as-is.
 * @typedef {Object} InvoiceEmailsPostQuery
 */
/**
 * Factory for invoice emails API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
declare function emailsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
};
declare namespace emailsFactory {
    export { InvoiceEmailsPostQuery };
}
/**
 * Query params for POST /emails (btrz-api-invoices). Forwarded to API as-is.
 */
type InvoiceEmailsPostQuery = any;
