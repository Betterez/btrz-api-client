export = tripManifestsFactory;
/**
 * Query params for GET /trip-manifests (btrz-api-reports). Documented from client; backend may support pagination/filters.
 * @typedef {Object} TripManifestsListQuery
 * @property {number} [page] - Page (if supported)
 * @property {number} [recordsPerPage] - Records per page (if supported)
 */
/**
 * Factory for trip manifests reports API (btrz-api-reports).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function tripManifestsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace tripManifestsFactory {
    export { TripManifestsListQuery };
}
/**
 * Query params for GET /trip-manifests (btrz-api-reports). Documented from client; backend may support pagination/filters.
 */
type TripManifestsListQuery = {
    /**
     * - Page (if supported)
     */
    page?: number;
    /**
     * - Records per page (if supported)
     */
    recordsPerPage?: number;
};
