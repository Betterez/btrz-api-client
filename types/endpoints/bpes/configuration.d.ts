export = configurationFactory;
/**
 * Factory for BPE configuration API (btrz-api-bpes).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, update: function }}
 */
declare function configurationFactory({ client }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    create: Function;
    update: Function;
};
