export = docsFactory;
/**
 * Factory for Coltrane API docs (btrz-api-coltrane).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
declare function docsFactory({ client }: {
    client: import("axios").AxiosInstance;
}): {
    get: Function;
};
