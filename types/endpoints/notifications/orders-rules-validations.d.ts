export = ordersRulesValidations;
/**
 * Query params for POST /orders-rules-validations (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} OrdersRulesValidationsPostQuery
 */
/**
 * Factory for orders-rules-validations API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
declare function ordersRulesValidations({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
};
declare namespace ordersRulesValidations {
    export { OrdersRulesValidationsPostQuery };
}
/**
 * Query params for POST /orders-rules-validations (btrz-api-notifications). Forwarded to API as-is.
 */
type OrdersRulesValidationsPostQuery = any;
