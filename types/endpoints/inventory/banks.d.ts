export = banksFactory;
/**
 * @typedef {Object} BanksQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for banks API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function banksFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    remove: Function;
};
declare namespace banksFactory {
    export { BanksQuery };
}
type BanksQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
