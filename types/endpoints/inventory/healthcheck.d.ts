export = healthCheckFactory;
/**
 * Factory for healthcheck API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
declare function healthCheckFactory({ client }: {
    client: import("axios").AxiosInstance;
}): {
    get: Function;
};
