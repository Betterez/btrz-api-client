export = paymentProvidersFactory;
/**
 * @typedef {Object} PaymentProvidersQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for payment-providers API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function paymentProvidersFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace paymentProvidersFactory {
    export { PaymentProvidersQuery };
}
type PaymentProvidersQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
