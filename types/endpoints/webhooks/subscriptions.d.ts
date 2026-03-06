export = subscriptionsFactory;
/**
 * Query params for GET /subscriptions (webhooks). Client merges opts.context into query.
 * @typedef {Object} WebhookSubscriptionsListQuery
 * @property {string} [context] - Context filter (merged from opts.context by client)
 */
/**
 * Factory for webhook subscriptions API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getById: function, create: function, put: function, deleteById: function }}
 */
declare function subscriptionsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    getById: Function;
    create: Function;
    put: Function;
    deleteById: Function;
};
declare namespace subscriptionsFactory {
    export { WebhookSubscriptionsListQuery };
}
/**
 * Query params for GET /subscriptions (webhooks). Client merges opts.context into query.
 */
type WebhookSubscriptionsListQuery = {
    /**
     * - Context filter (merged from opts.context by client)
     */
    context?: string;
};
