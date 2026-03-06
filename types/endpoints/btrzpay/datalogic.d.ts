export = datalogicFactory;
/**
 * @typedef {Object} DatalogicQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for Datalogic API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, referenceNumber: Object, authCode: Object }}
 */
declare function datalogicFactory({ client }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    payments: any;
    referenceNumber: any;
    authCode: any;
};
declare namespace datalogicFactory {
    export { DatalogicQuery };
}
type DatalogicQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
