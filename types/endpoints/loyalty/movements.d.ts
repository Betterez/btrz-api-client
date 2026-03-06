export = movementsFactory;
/**
 * Query params for GET /programs/:programId/movements and related (loyalty). Documented from client; backend may support pagination/filters.
 * @typedef {Object} LoyaltyMovementsQuery
 * @property {number} [page] - Page (if supported)
 * @property {number} [recordsPerPage] - Records per page (if supported)
 */
/**
 * Factory for loyalty movements API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, balance: Object }}
 */
declare function movementsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    balance: any;
};
declare namespace movementsFactory {
    export { LoyaltyMovementsQuery };
}
/**
 * Query params for GET /programs/:programId/movements and related (loyalty). Documented from client; backend may support pagination/filters.
 */
type LoyaltyMovementsQuery = {
    /**
     * - Page (if supported)
     */
    page?: number;
    /**
     * - Records per page (if supported)
     */
    recordsPerPage?: number;
};
