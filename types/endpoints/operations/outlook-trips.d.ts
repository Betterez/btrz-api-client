export = outlookTripsFactory;
/**
 * @typedef {Object} OutlookTripsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for outlook-trips API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} outlook-trips API methods
 */
declare function outlookTripsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace outlookTripsFactory {
    export { OutlookTripsQuery };
}
type OutlookTripsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
