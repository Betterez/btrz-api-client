export = scheduledNotificationsFactory;
/**
 * Query params for GET /scheduled-notifications (btrz-api-operations getSpec).
 * @typedef {Object} ScheduledNotificationsListQuery
 * @property {string} [groupId] - Group id to retrieve
 */
/**
 * PUT and POST /scheduled-notifications do not define query params in backend getSpec. Use for optional query keys forwarded as-is.
 * @typedef {Object} ScheduledNotificationsPostQuery
 */
/**
 * Factory for scheduled-notifications API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} scheduled-notifications API methods
 */
declare function scheduledNotificationsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace scheduledNotificationsFactory {
    export { ScheduledNotificationsListQuery, ScheduledNotificationsPostQuery };
}
/**
 * Query params for GET /scheduled-notifications (btrz-api-operations getSpec).
 */
type ScheduledNotificationsListQuery = {
    /**
     * - Group id to retrieve
     */
    groupId?: string;
};
/**
 * PUT and POST /scheduled-notifications do not define query params in backend getSpec. Use for optional query keys forwarded as-is.
 */
type ScheduledNotificationsPostQuery = any;
