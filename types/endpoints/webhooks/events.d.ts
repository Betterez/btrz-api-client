export = eventsFactory;
/**
 * Query params for GET /events (webhooks). Client merges opts.context into query.
 * @typedef {Object} WebhookEventsListQuery
 * @property {string} [context] - Context filter (merged from opts.context by client)
 */
/**
 * Factory for webhook events API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function eventsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace eventsFactory {
    export { WebhookEventsListQuery };
}
/**
 * Query params for GET /events (webhooks). Client merges opts.context into query.
 */
type WebhookEventsListQuery = {
    /**
     * - Context filter (merged from opts.context by client)
     */
    context?: string;
};
