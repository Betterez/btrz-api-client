"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for transport-regulations API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} transport-regulations API methods (cnrt)
 */


function transportRegulationsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var cnrt = {
    /**
     * POST /transport-regulations/cnrt/manifests - create CNRT manifest.
     * @param {Object} opts
     * @param {Object} opts.data - Request body
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref2) {
      var data = _ref2.data,
          token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          headers = _ref2.headers;

      return client({
        url: "/transport-regulations/cnrt/manifests",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    cnrt: cnrt
  };
}

module.exports = transportRegulationsFactory;