export = calendarEntriesFactory;
/**
 * @typedef {Object} CalendarEntriesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for calendar-entries API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} calendar-entries API methods
 */
declare function calendarEntriesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace calendarEntriesFactory {
    export { CalendarEntriesQuery };
}
type CalendarEntriesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
