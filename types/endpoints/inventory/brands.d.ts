export = brandsFactory;
/**
 * @typedef {Object} BrandsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for brands API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */
declare function brandsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    update: Function;
    get: Function;
};
declare namespace brandsFactory {
    export { BrandsQuery };
}
type BrandsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
