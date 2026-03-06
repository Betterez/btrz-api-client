export = vouchersFactory;
/**
 * @typedef {Object} VouchersQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for vouchers API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} vouchers API methods
 */
declare function vouchersFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace vouchersFactory {
    export { VouchersQuery };
}
type VouchersQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
