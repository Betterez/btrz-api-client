export = movementsFactory;
/**
 * @typedef {Object} MovementsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for movements API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} movements API methods
 */
declare function movementsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace movementsFactory {
    export { MovementsQuery };
}
type MovementsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
