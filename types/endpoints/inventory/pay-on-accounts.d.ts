export = payOnAccountsFactory;
/**
 * @typedef {Object} PayOnAccountsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for pay-on-accounts API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function payOnAccountsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace payOnAccountsFactory {
    export { PayOnAccountsQuery };
}
type PayOnAccountsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
