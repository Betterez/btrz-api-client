/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
 * Factory for parcels-manifests API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} parcels-manifests API (all, get, create, parcels, vehicles)
 */
function parcelsManifestsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /parcels-manifests - list parcels manifests for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ParcelsManifestsListQuery} [opts.query] - List filters: date, dateFrom, dateTo, originId, destinationId, externalId, page, recordsPerPage
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} GetParcelManifestsResponse; 400 WRONG_DATA, 401 Unauthorized
   */
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/parcels-manifests",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /parcels-manifests/:id - get parcels manifest by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel manifest id (ObjectId, 24 hex chars)
   * @param {"standard"|"webhook"} [opts.format="standard"] - Response format (standard | webhook)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} response.data parcel manifest; 400 WRONG_DATA; 404 MANIFEST_NOT_FOUND, PARCELMANIFEST_NOT_FOUND
   */
  function get({token, jwtToken, id, format, headers}) {
    return client({
      url: `/parcels-manifests/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: format != null ? {format} : undefined
    });
  }

  /**
   * POST /parcels-manifests - create parcels manifest. Body: ParcelManifestPostData.
   * Backend getSpec does not define query params; query is passed through as-is if provided.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ParcelsManifestsPostQuery} [opts.query] - Optional query params (backend getSpec has none; forwarded as-is)
   * @param {Object} opts.data - Parcel manifest payload (parcelmanifest / ParcelManifestPostData)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} response.data NewParcelManifestResponse; 404, 409 on validation errors
   */
  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/parcels-manifests",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  const parcels = {
    /**
     * DELETE /parcels-manifests/:manifestId/parcels/:parcelId - remove parcel from manifest. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Parcel manifest id (ObjectId)
     * @param {string} opts.parcelId - Parcel id (ObjectId)
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove({token, jwtToken, manifestId, parcelId, headers}) {
      return client({
        url: `/parcels-manifests/${manifestId}/parcels/${parcelId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /parcels-manifests/:manifestId/parcels - create parcel on manifest. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Parcel manifest id (ObjectId)
     * @param {Object} opts.data - Parcel payload (parcels, optional overrideOandD)
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>} PostParcelsManifestsResponse; 400 WRONG_DATA, 404, 409 CAN_ADD_PARCEL_TO_MANIFEST_BECAUSE_OF_CUTOFF
     */
    create({token, jwtToken, manifestId, query = {}, data, headers}) {
      return client({
        url: `/parcels-manifests/${manifestId}/parcels`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    }
  };

  const vehicles = {
    /**
     * POST /parcels-manifests/:manifestId/vehicles - create or update vehicle on manifest. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Parcel manifest id (ObjectId)
     * @param {Object} opts.data - Vehicle payload (vehicleId required)
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>} PostVehicleManifestsResponse; 400 WRONG_DATA, 404 MANIFEST_NOT_FOUND, 409 MANIFEST_HAS_PASSENGERS
     */
    createOrUpdate({token, jwtToken, manifestId, query = {}, data, headers}) {
      return client({
        url: `/parcels-manifests/${manifestId}/vehicles`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {
          parcelManifestVehicle: data
        }
      });
    }
  };

  return {
    all,
    get,
    create,
    parcels,
    vehicles
  };
}

module.exports = parcelsManifestsFactory;
