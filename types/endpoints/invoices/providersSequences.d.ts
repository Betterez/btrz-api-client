export = providersSequencesFactory;
/**
 * Query params for provider sequences endpoints (btrz-api-invoices). Backend getSpec for list has no query; forwarded as-is.
 * @typedef {Object} InvoiceProvidersSequencesQuery
 */
/**
 * Factory for invoice provider sequences API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, remove: function, create: function, update: function }}
 */
declare function providersSequencesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    remove: Function;
    create: Function;
    update: Function;
};
declare namespace providersSequencesFactory {
    export { InvoiceProvidersSequencesQuery };
}
/**
 * Query params for provider sequences endpoints (btrz-api-invoices). Backend getSpec for list has no query; forwarded as-is.
 */
type InvoiceProvidersSequencesQuery = any;
