export = emailFactory;
/**
 * Query params for POST /email (btrz-api-notifications). Define recipient, template, etc. Forwarded to API as-is.
 * @typedef {Object} NotificationsEmailPostQuery
 */
/**
 * Factory for email API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
declare function emailFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
};
declare namespace emailFactory {
    export { NotificationsEmailPostQuery };
}
/**
 * Query params for POST /email (btrz-api-notifications). Define recipient, template, etc. Forwarded to API as-is.
 */
type NotificationsEmailPostQuery = any;
