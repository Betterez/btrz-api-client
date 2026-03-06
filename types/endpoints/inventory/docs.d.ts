export = docsFactory;
/**
 * Factory for API docs (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
declare function docsFactory({ client }: {
    client: import("axios").AxiosInstance;
}): {
    get: Function;
};
