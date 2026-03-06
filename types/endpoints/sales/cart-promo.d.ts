export = cartPromoFactory;
/**
 * @typedef {Object} CartPromoQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for cart promos API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, remove: function }}
 */
declare function cartPromoFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    remove: Function;
};
declare namespace cartPromoFactory {
    export { CartPromoQuery };
}
type CartPromoQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
