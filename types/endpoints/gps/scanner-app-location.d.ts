export = scannerAppLocationFactory;
/**
 * Query params for GET /scanner-app-location (used by websales; GPS API).
 * @typedef {Object} ScannerAppLocationQuery
 * @property {string} [scheduleId] - Schedule id
 * @property {string} [routeId] - Route id
 * @property {string} [date] - Date (e.g. YYYY-MM-DD); defaults to today when omitted in websales
 * @property {boolean} [includeTravelledPath] - Whether to include travelled path
 */
/**
 * Factory for scanner app location API (GPS).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function scannerAppLocationFactory({ client }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace scannerAppLocationFactory {
    export { ScannerAppLocationQuery };
}
/**
 * Query params for GET /scanner-app-location (used by websales; GPS API).
 */
type ScannerAppLocationQuery = {
    /**
     * - Schedule id
     */
    scheduleId?: string;
    /**
     * - Route id
     */
    routeId?: string;
    /**
     * - Date (e.g. YYYY-MM-DD); defaults to today when omitted in websales
     */
    date?: string;
    /**
     * - Whether to include travelled path
     */
    includeTravelledPath?: boolean;
};
