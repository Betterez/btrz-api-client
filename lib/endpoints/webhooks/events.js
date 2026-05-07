"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /events (webhooks). Client merges opts.context into query.
 * @typedef {Object} WebhookEventsListQuery
 * @property {string} [context] - Context filter (merged from opts.context by client)
 */

/**
 * Factory for webhook events API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function eventsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /events - list webhook events. Query is merged with context (opts.context).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.context] - Context filter (merged into query)
   * @param {WebhookEventsListQuery} [opts.query] - Additional query params (merged with context)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        context = _ref2.context,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "/events",
      params: queryObj,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all
  };
}

module.exports = eventsFactory;