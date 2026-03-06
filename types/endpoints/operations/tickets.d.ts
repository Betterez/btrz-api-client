export = ticketsFactory;
/**
 * @typedef {Object} TicketsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for tickets API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} tickets API methods
 */
declare function ticketsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace ticketsFactory {
    export { TicketsQuery };
}
type TicketsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
