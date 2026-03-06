export = taxesFactory;
/**
 * @typedef {Object} TaxesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for taxes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, exceptions: object }}
 */
declare function taxesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    exceptions: object;
};
declare namespace taxesFactory {
    export { TaxesQuery };
}
type TaxesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
