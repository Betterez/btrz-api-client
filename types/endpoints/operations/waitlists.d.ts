export = waitlistsFactory;
/**
 * Query params for GET /waitlists (btrz-api-operations getSpec).
 * @typedef {Object} WaitlistsListQuery
 * @property {number} [page] - Page number to return (20 records per page)
 * @property {string} [originId] - Filter by origin id (24 hex chars)
 * @property {string} [destinationId] - Filter by destination id (24 hex chars)
 * @property {string} [dateOfTravelStr] - Filter by date of travel (YYYY-MM-DD)
 */
/**
 * Factory for waitlists API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} waitlists API methods
 */
declare function waitlistsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace waitlistsFactory {
    export { WaitlistsListQuery };
}
/**
 * Query params for GET /waitlists (btrz-api-operations getSpec).
 */
type WaitlistsListQuery = {
    /**
     * - Page number to return (20 records per page)
     */
    page?: number;
    /**
     * - Filter by origin id (24 hex chars)
     */
    originId?: string;
    /**
     * - Filter by destination id (24 hex chars)
     */
    destinationId?: string;
    /**
     * - Filter by date of travel (YYYY-MM-DD)
     */
    dateOfTravelStr?: string;
};
