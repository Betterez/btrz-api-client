export = externalBookingsFactory;
/**
 * @typedef {Object} ExternalBookingsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for external-bookings API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} external-bookings API methods
 */
declare function externalBookingsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace externalBookingsFactory {
    export { ExternalBookingsQuery };
}
type ExternalBookingsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
