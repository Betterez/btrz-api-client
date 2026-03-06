export = customersFactory;
/**
 * Query params for customers notification endpoints (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} NotificationsCustomersQuery
 */
/**
 * Factory for customers notifications API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ sendResetPasswordEmail: function, sendActivationEmail: function }}
 */
declare function customersFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    sendResetPasswordEmail: Function;
    sendActivationEmail: Function;
};
declare namespace customersFactory {
    export { NotificationsCustomersQuery };
}
/**
 * Query params for customers notification endpoints (btrz-api-notifications). Forwarded to API as-is.
 */
type NotificationsCustomersQuery = any;
