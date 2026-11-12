function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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
function parcelFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /parcels/{parcelId} - get parcel by id. Requires JwtAuth. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 { parcel }; 400 INVALID_PARCEL_ID; 401 Unauthorized; 404 PARCEL_NOT_FOUND; 500
   */
  function get({
    token,
    jwtToken,
    id,
    headers
  }) {
    return client({
      url: `/parcels/${id}`,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function all({
    token,
    jwtToken,
    query = {},
    headers,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: "/parcels",
      params: query_,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function addScan({
    token,
    jwtToken,
    id,
    operationType,
    locationData,
    headers
  }) {
    return client({
      url: `/parcels/${id}/scans`,
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        operationType,
        locationData
      }
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
  function addComment({
    token,
    jwtToken,
    headers,
    id,
    comment
  }) {
    return client({
      url: `/parcels/${id}/user-comments`,
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        comment
      }
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
   * @returns {Promise<import("axios").AxiosResponse>} 200 deleted
   * ParcelUserComment; 400 MISSING_*; 401; 403;
   * 404 PARCEL_NOT_FOUND, COMMENT_NOT_FOUND; 409
   */
  function deleteComment({
    token,
    jwtToken,
    headers,
    id,
    commentId
  }) {
    return client({
      url: `/parcels/${id}/user-comments/${commentId}`,
      method: "delete",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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