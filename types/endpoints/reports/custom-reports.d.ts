export = customReportsFactory;
/**
 * Query params for GET /custom-reports (btrz-api-reports). Documented from client; backend may support pagination/filters.
 * @typedef {Object} CustomReportsListQuery
 * @property {number} [page] - Page (if supported)
 * @property {number} [recordsPerPage] - Records per page (if supported)
 */
/**
 * Factory for custom reports API (btrz-api-reports).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, all: function, remove: function }}
 */
declare function customReportsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    create: Function;
    all: Function;
    remove: Function;
};
declare namespace customReportsFactory {
    export { CustomReportsListQuery };
}
/**
 * Query params for GET /custom-reports (btrz-api-reports). Documented from client; backend may support pagination/filters.
 */
type CustomReportsListQuery = {
    /**
     * - Page (if supported)
     */
    page?: number;
    /**
     * - Records per page (if supported)
     */
    recordsPerPage?: number;
};
