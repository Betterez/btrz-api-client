export = providersFactory;
/**
 * Query params for invoice providers endpoints (btrz-api-invoices). Forwarded to API as-is.
 * @typedef {Object} InvoiceProvidersQuery
 */
/**
 * Factory for invoice providers API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */
declare function providersFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    update: Function;
    remove: Function;
    create: Function;
};
declare namespace providersFactory {
    export { InvoiceProvidersQuery };
}
/**
 * Query params for invoice providers endpoints (btrz-api-invoices). Forwarded to API as-is.
 */
type InvoiceProvidersQuery = any;
