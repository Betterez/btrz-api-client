export = scheduleGroupsFactory;
/**
 * @typedef {Object} ScheduleGroupsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for schedule-groups API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
declare function scheduleGroupsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
};
declare namespace scheduleGroupsFactory {
    export { ScheduleGroupsQuery };
}
type ScheduleGroupsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
