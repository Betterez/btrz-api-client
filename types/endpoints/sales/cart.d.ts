export = cartFactory;
/**
 * @typedef {Object} CartQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for cart API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, add: function, deleteItems: function, deletePaidInItem: function, deletePaidInItems: function, loyaltyPointsAmount: Object, patch: function, partialDepositStatus: Object, payments: Object, taxExemptPaymentMethod: Object, financingCosts: Object }}
 */
declare function cartFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    create: Function;
    add: Function;
    deleteItems: Function;
    deletePaidInItem: Function;
    deletePaidInItems: Function;
    loyaltyPointsAmount: any;
    patch: Function;
    partialDepositStatus: any;
    payments: any;
    taxExemptPaymentMethod: any;
    financingCosts: any;
};
declare namespace cartFactory {
    export { CartQuery };
}
type CartQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
