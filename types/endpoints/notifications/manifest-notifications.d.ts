export = manifestNotificationsFactory;
/**
 * Query params for manifest-notifications endpoints (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} ManifestNotificationsQuery
 */
/**
 * Factory for manifest-notifications API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, all: function }}
 */
declare function manifestNotificationsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    all: Function;
};
declare namespace manifestNotificationsFactory {
    export { ManifestNotificationsQuery };
}
/**
 * Query params for manifest-notifications endpoints (btrz-api-notifications). Forwarded to API as-is.
 */
type ManifestNotificationsQuery = any;
