export = paymentTaxesFactory;
/**
 * Query params for GET /payment-taxes (btrz-api-inventory). See payment-taxes get-handler getSpec().
 * @typedef {Object} PaymentTaxesListQuery
 * @property {string} [providerIds] - Comma separated ids of the accounts to read (other accounts only with internal tokens)
 * @property {boolean} [enabled] - With true, disabled payment taxes are left out
 */
/**
 * Factory for payment-taxes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function paymentTaxesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace paymentTaxesFactory {
    export { PaymentTaxesListQuery };
}
/**
 * Query params for GET /payment-taxes (btrz-api-inventory). See payment-taxes get-handler getSpec().
 */
type PaymentTaxesListQuery = {
    /**
     * - Comma separated ids of the accounts to read (other accounts only with internal tokens)
     */
    providerIds?: string;
    /**
     * - With true, disabled payment taxes are left out
     */
    enabled?: boolean;
};
