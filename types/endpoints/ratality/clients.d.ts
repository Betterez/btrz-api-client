export = clientsFactory;
/**
 * Factory for Ratality clients API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @param {string} deps.version - API version path
 * @returns {{ create: function, get: function }}
 */
declare function clientsFactory({ client, version }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
    version: string;
}): {
    create: Function;
    get: Function;
};
