export = bareRoutesFactory;
/**
 * @typedef {Object} BareRoutesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for bare-routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */
declare function bareRoutesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
};
declare namespace bareRoutesFactory {
    export { BareRoutesQuery };
}
type BareRoutesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
