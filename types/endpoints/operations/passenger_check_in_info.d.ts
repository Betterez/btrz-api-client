export = passengerCheckInInfoFactory;
/**
 * Query params for GET /passenger-check-in-info (btrz-api-operations getSpec).
 * @typedef {Object} PassengerCheckInInfoListQuery
 * @property {string} documentType - Document type id (ObjectId; required)
 * @property {string} documentNumber - Document number of the passenger (required)
 * @property {string} [providerId] - Provider/account id; defaults to authenticated account when omitted
 */
/**
 * PUT and POST /passenger-check-in-info do not define query params in backend getSpec. Use for optional query keys forwarded as-is.
 * @typedef {Object} PassengerCheckInInfoPostQuery
 */
/**
 * Factory for passenger-check-in-info API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} passenger-check-in-info API methods
 */
declare function passengerCheckInInfoFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace passengerCheckInInfoFactory {
    export { PassengerCheckInInfoListQuery, PassengerCheckInInfoPostQuery };
}
/**
 * Query params for GET /passenger-check-in-info (btrz-api-operations getSpec).
 */
type PassengerCheckInInfoListQuery = {
    /**
     * - Document type id (ObjectId; required)
     */
    documentType: string;
    /**
     * - Document number of the passenger (required)
     */
    documentNumber: string;
    /**
     * - Provider/account id; defaults to authenticated account when omitted
     */
    providerId?: string;
};
/**
 * PUT and POST /passenger-check-in-info do not define query params in backend getSpec. Use for optional query keys forwarded as-is.
 */
type PassengerCheckInInfoPostQuery = any;
