export = undeliveredFactory;
/**
 * Query params for GET /undelivered (btrz-api-notifications). context can also be passed via opts.context and is merged into query.
 * @typedef {Object} WebhookUndeliveredListQuery
 * @property {string} [context] - Context filter (also accepted as opts.context)
 */
/**
 * Factory for undelivered webhooks API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getById: function, patch: function, resend: function, resendAll: function, deleteById: function, deleteAll: function }}
 */
declare function undeliveredFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    getById: Function;
    patch: Function;
    resend: Function;
    resendAll: Function;
    deleteById: Function;
    deleteAll: Function;
};
declare namespace undeliveredFactory {
    export { WebhookUndeliveredListQuery };
}
/**
 * Query params for GET /undelivered (btrz-api-notifications). context can also be passed via opts.context and is merged into query.
 */
type WebhookUndeliveredListQuery = {
    /**
     * - Context filter (also accepted as opts.context)
     */
    context?: string;
};
