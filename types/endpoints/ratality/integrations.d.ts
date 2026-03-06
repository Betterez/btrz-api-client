export = integrationsFactory;
/**
 * Factory for Ratality integrations API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @param {string} deps.version - API version path
 * @returns {{ get: function, create: function, remove: function }}
 */
declare function integrationsFactory({ client, version }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
    version: string;
}): {
    get: Function;
    create: Function;
    remove: Function;
};
