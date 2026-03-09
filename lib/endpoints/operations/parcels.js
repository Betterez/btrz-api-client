"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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


function parcelFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /parcels/{parcelId} - get parcel by id. Requires JwtAuth. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 { parcel }; 400 INVALID_PARCEL_ID; 401 Unauthorized; 404 PARCEL_NOT_FOUND; 500
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers;

    return client({
      url: "/parcels/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers,
        providerId = _ref3.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/parcels",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function addScan(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        operationType = _ref4.operationType,
        locationData = _ref4.locationData,
        headers = _ref4.headers;

    return client({
      url: "/parcels/" + id + "/scans",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operationType: operationType, locationData: locationData }
    });
  }

  /**
   * POST /parcels/{parcelId}/user-comments - add user comment to parcel. Requires JwtAuth. Body: { comment } (string).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id (path parcelId)
   * @param {string} opts.comment - Comment text (sent as body.comment)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 ParcelUserComment; 400 MISSING_*; 401; 403; 404 PARCEL_NOT_FOUND; 409
   */
  function addComment(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers,
        id = _ref5.id,
        comment = _ref5.comment;

    return client({
      url: "/parcels/" + id + "/user-comments",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { comment: comment }
    });
  }

  /**
   * DELETE /parcels/{parcelId}/user-comments/{commentId} - delete user comment from parcel. Requires JwtAuth.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id (path parcelId)
   * @param {string} opts.commentId - Comment id (path)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 deleted ParcelUserComment; 400 MISSING_*; 401; 403; 404 PARCEL_NOT_FOUND, COMMENT_NOT_FOUND; 409
   */
  function deleteComment(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers,
        id = _ref6.id,
        commentId = _ref6.commentId;

    return client({
      url: "/parcels/" + id + "/user-comments/" + commentId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get,
    all: all,
    addScan: addScan,
    addComment: addComment,
    deleteComment: deleteComment
  };
}

module.exports = parcelFactory;