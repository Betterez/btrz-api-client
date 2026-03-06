export = stripeTerminalsFactory;
/**
 * @typedef {Object} StripeTerminalsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for Stripe terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, simulate: function }}
 */
declare function stripeTerminalsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    simulate: Function;
};
declare namespace stripeTerminalsFactory {
    export { StripeTerminalsQuery };
}
type StripeTerminalsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
