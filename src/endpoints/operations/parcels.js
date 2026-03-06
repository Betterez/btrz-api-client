const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /parcels list (btrz-api-operations). See get-parcel-handler getSpec().
 * @typedef {Object} ParcelsListQuery
 * @property {string} [trxId] - Transaction ID
 * @property {string} [transactionId] - Transaction ID (alias)
 * @property {string} [parcelId] - Parcel ID
 * @property {string} [dateFrom] - Filter from date
 * @property {string} [dateTo] - Filter to date
 * @property {string} [originId] - Origin station ID
 * @property {string} [destinationId] - Destination station ID
 * @property {string} [trackingStatus] - Tracking status
 * @property {boolean} [notInManifest] - Exclude parcels already in a manifest
 * @property {string} [providerId] - Provider account ID (also set via opts.providerId)
 * @property {string} [lookupSearchParams] - Search for lookup
 * @property {number} [page] - Page number
 * @property {number} [recordsPerPage] - Records per page
 * @property {boolean} [assignableToManifest] - Only parcels assignable to manifest
 */

/**
 * Factory for parcels API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} parcels API methods
 */
function parcelFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /parcels/:id - get parcel by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/parcels/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /parcels - list parcels.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ParcelsListQuery} [opts.query] - Query params (providerId merged if opts.providerId set)
   * @param {string} [opts.providerId] - Provider id (merged into query)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: "/parcels",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /parcels/:id/scans - add scan to parcel. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id
   * @param {string} opts.operationType - Operation type
   * @param {Object} opts.locationData - Location data payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addScan({token, jwtToken, id, operationType, locationData, headers}) {
    return client({
      url: `/parcels/${id}/scans`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operationType, locationData}
    });
  }

  /**
   * POST /parcels/:id/user-comments - add comment to parcel. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id
   * @param {Object} opts.comment - Comment payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addComment({token, jwtToken, headers, id, comment}) {
    return client({
      url: `/parcels/${id}/user-comments`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {comment}
    });
  }

  /**
   * DELETE /parcels/:id/user-comments/:commentId - delete parcel comment. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id
   * @param {string} opts.commentId - Comment id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteComment({token, jwtToken, headers, id, commentId}) {
    return client({
      url: `/parcels/${id}/user-comments/${commentId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    all,
    addScan,
    addComment,
    deleteComment
  };
}

module.exports = parcelFactory;
