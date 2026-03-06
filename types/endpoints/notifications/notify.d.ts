export = notifyTicketFactory;
/**
 * Query params for notify-tickets and notify-vouchers (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} NotifyQuery
 */
/**
 * Factory for notify (child users, tickets, vouchers, manifest) API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ childUsers: { create: function }, tickets: { create: function }, vouchers: { create: function }, manifest: { create: function } }}
 */
declare function notifyTicketFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    childUsers: {
        create: Function;
    };
    tickets: {
        create: Function;
    };
    vouchers: {
        create: Function;
    };
    manifest: {
        create: Function;
    };
};
declare namespace notifyTicketFactory {
    export { NotifyQuery };
}
/**
 * Query params for notify-tickets and notify-vouchers (btrz-api-notifications). Forwarded to API as-is.
 */
type NotifyQuery = any;
