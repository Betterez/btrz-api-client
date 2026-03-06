export = rmsFactory;
/**
 * @typedef {Object} RmsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for RMS API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} rms API methods (manifestForecasts)
 */
declare function rmsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace rmsFactory {
    export { RmsQuery };
}
type RmsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
