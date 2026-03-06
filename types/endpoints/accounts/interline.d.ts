export = interlineFactory;
/**
 * Factory for interline API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ invitations: object, consumers: object, providers: object, network: object, remove: function }}
 */
declare function interlineFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    invitations: object;
    consumers: object;
    providers: object;
    network: object;
    remove: Function;
};
