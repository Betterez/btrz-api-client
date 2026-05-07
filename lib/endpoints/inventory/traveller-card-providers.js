"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for traveller-card-providers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */


function travellerCardProvidersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /traveller-card-providers - list traveller card providers. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/traveller-card-providers",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /traveller-card-providers - create traveller card provider.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.travellerCardProvider - Traveller card provider payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        travellerCardProvider = _ref3.travellerCardProvider,
        headers = _ref3.headers;

    return client({
      url: "/traveller-card-providers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { travellerCardProvider: travellerCardProvider }
    });
  }

  /**
   * PUT /traveller-card-providers/:travellerCardProviderId - update traveller card provider. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardProviderId - Traveller card provider id
   * @param {Object} opts.travellerCardProvider - Traveller card provider payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        travellerCardProviderId = _ref4.travellerCardProviderId,
        travellerCardProvider = _ref4.travellerCardProvider,
        headers = _ref4.headers;

    return client({
      url: "/traveller-card-providers/" + travellerCardProviderId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { travellerCardProvider: travellerCardProvider }
    });
  }

  /**
   * GET /traveller-card-providers/:travellerCardProviderId - get traveller card provider by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardProviderId - Traveller card provider id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    var token = _ref5.token,
        travellerCardProviderId = _ref5.travellerCardProviderId,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/traveller-card-providers/" + travellerCardProviderId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  return {
    all: all,
    create: create,
    update: update,
    get: get
  };
}

module.exports = travellerCardProvidersFactory;