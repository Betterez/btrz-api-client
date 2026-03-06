"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} ParcelsQuery
 * @property {string} [providerId] - Provider account ID (also set via opts.providerId)
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
   * GET /parcels/:id - get parcel by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * @param {ParcelsQuery} [opts.query] - Query params (providerId merged if opts.providerId set)
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
   * POST /parcels/:id/scans - add scan to parcel.
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
   * POST /parcels/:id/user-comments - add comment to parcel.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id
   * @param {Object} opts.comment - Comment payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * DELETE /parcels/:id/user-comments/:commentId - delete parcel comment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Parcel id
   * @param {string} opts.commentId - Comment id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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