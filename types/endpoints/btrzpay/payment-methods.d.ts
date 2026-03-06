export = paymentMethodsFactory;
/**
 * Query params for GET /payment-methods (btrz-api-payments). Passed through as-is when no backend spec found.
 * @typedef {Object} PaymentMethodsListQuery
 * @property {string} [providerName] - Filter by provider name (deprecated; use getByProviderName for single provider)
 */
/**
 * Factory for payment methods API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} methods all, getByProviderName, create, get, update, setToAgency,
 *   createDefaultPaymentMethods, deleteCustomersCreditCardInfo, deletePaymentMethodsDomain
 */
declare function paymentMethodsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace paymentMethodsFactory {
    export { PaymentMethodsListQuery };
}
/**
 * Query params for GET /payment-methods (btrz-api-payments). Passed through as-is when no backend spec found.
 */
type PaymentMethodsListQuery = {
    /**
     * - Filter by provider name (deprecated; use getByProviderName for single provider)
     */
    providerName?: string;
};
