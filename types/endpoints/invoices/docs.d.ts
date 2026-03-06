export = docsFactory;
/**
 * Factory for invoices API docs (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
declare function docsFactory({ client }: {
    client: import("axios").AxiosInstance;
}): {
    get: Function;
};
