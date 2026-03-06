export = s3BucketsFactory;
/**
 * Factory for s3Buckets (account) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ update: function, remove: function, create: function }}
 */
declare function s3BucketsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    update: Function;
    remove: Function;
    create: Function;
};
