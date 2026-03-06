export = segmentsFactory;
/**
 * Query params for GET /products/:productId/segments/:ticketId (btrz-api-operations). Client passes providerId as query.
 * @typedef {Object} SegmentsListQuery
 * @property {string} [providerId] - Provider/account id
 */
/**
 * Factory for segments API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} segments API methods
 */
declare function segmentsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace segmentsFactory {
    export { SegmentsListQuery };
}
/**
 * Query params for GET /products/:productId/segments/:ticketId (btrz-api-operations). Client passes providerId as query.
 */
type SegmentsListQuery = {
    /**
     * - Provider/account id
     */
    providerId?: string;
};
