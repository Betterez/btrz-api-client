export = oxxoFactory;
/**
 * Query params for GET /oxxo/:token/payments (btrz-api-payments getSpec).
 * @typedef {Object} OxxoPaymentsListQuery
 * @property {string} [referenceNumber] - Payment reference number
 */
/**
 * POST /oxxo/:token/payments/:referenceNumber and POST /oxxo/:token/reverse/:referenceNumber do not define
 * query params in backend getSpec (path + body only). Use for optional query keys forwarded as-is.
 * @typedef {Object} OxxoPostQuery
 */
/**
 * Factory for OXXO API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ token: Object, payments: Object }}
 */
declare function oxxoFactory({ client, internalAuthTokenProvider: _internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    token: any;
    payments: any;
};
declare namespace oxxoFactory {
    export { OxxoPaymentsListQuery, OxxoPostQuery };
}
/**
 * Query params for GET /oxxo/:token/payments (btrz-api-payments getSpec).
 */
type OxxoPaymentsListQuery = {
    /**
     * - Payment reference number
     */
    referenceNumber?: string;
};
/**
 * POST /oxxo/:token/payments/:referenceNumber and POST /oxxo/:token/reverse/:referenceNumber do not define
 * query params in backend getSpec (path + body only). Use for optional query keys forwarded as-is.
 */
type OxxoPostQuery = any;
