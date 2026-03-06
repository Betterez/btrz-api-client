export = orderFactory;
/**
 * @typedef {Object} OrderPaymentsQuery
 * @property {string} channel - Channel where cart is being purchased (see API for allowed values)
 * @property {string} [providerId] - Account ID the transaction belongs to
 */
/**
 * @typedef {Object} OrderGetQuery
 * @property {string} [providerId] - Account ID for the order
 */
/**
 * Factory for order API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, get: function, overwrite: function }}
 */
declare function orderFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    get: Function;
    overwrite: Function;
};
declare namespace orderFactory {
    export { OrderPaymentsQuery, OrderGetQuery };
}
type OrderPaymentsQuery = {
    /**
     * - Channel where cart is being purchased (see API for allowed values)
     */
    channel: string;
    /**
     * - Account ID the transaction belongs to
     */
    providerId?: string;
};
type OrderGetQuery = {
    /**
     * - Account ID for the order
     */
    providerId?: string;
};
