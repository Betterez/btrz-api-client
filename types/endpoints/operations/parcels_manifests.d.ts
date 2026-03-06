export = parcelsManifestsFactory;
/**
 * Query params for GET /parcels-manifests (btrz-api-operations getSpec).
 * @typedef {Object} ParcelsManifestsListQuery
 * @property {string} [date] - Date of manifests (ParcelsManifests.DATE_FORMAT)
 * @property {string} [dateFrom] - Start date range (same format)
 * @property {string} [dateTo] - End date range (same format)
 * @property {string} [originId] - Origin (departure) station ID (24 hex chars)
 * @property {string} [destinationId] - Destination station ID (24 hex chars)
 * @property {string} [externalId] - External id associated
 * @property {number} [page] - Page to return
 * @property {number} [recordsPerPage] - Records per page (max 100)
 */
/**
 * POST /parcels-manifests, POST .../parcels, POST .../vehicles do not define query params in backend getSpec.
 * Use for optional query keys forwarded as-is.
 * @typedef {Object} ParcelsManifestsPostQuery
 */
/**
 * Factory for parcels-manifests API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} parcels-manifests API (all, get, create, parcels, vehicles)
 */
declare function parcelsManifestsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace parcelsManifestsFactory {
    export { ParcelsManifestsListQuery, ParcelsManifestsPostQuery };
}
/**
 * Query params for GET /parcels-manifests (btrz-api-operations getSpec).
 */
type ParcelsManifestsListQuery = {
    /**
     * - Date of manifests (ParcelsManifests.DATE_FORMAT)
     */
    date?: string;
    /**
     * - Start date range (same format)
     */
    dateFrom?: string;
    /**
     * - End date range (same format)
     */
    dateTo?: string;
    /**
     * - Origin (departure) station ID (24 hex chars)
     */
    originId?: string;
    /**
     * - Destination station ID (24 hex chars)
     */
    destinationId?: string;
    /**
     * - External id associated
     */
    externalId?: string;
    /**
     * - Page to return
     */
    page?: number;
    /**
     * - Records per page (max 100)
     */
    recordsPerPage?: number;
};
/**
 * POST /parcels-manifests, POST .../parcels, POST .../vehicles do not define query params in backend getSpec.
 * Use for optional query keys forwarded as-is.
 */
type ParcelsManifestsPostQuery = any;
