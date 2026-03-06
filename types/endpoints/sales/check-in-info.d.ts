export = checkInInfoFactory;
/**
 * @typedef {Object} CheckInInfoQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for check-in API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function checkInInfoFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace checkInInfoFactory {
    export { CheckInInfoQuery };
}
type CheckInInfoQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
