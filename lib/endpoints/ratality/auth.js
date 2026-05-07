"use strict";

/**
 * Factory for Ratality auth API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function authFactory(_ref) {
  var client = _ref.client;

  /**
   * POST /authenticate - authenticate.
   * @param {Object} opts
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    var data = _ref2.data,
        headers = _ref2.headers;

    return client({
      url: "/authenticate",
      method: "post",
      headers: headers,
      data: data
    });
  }

  return {
    create: create
  };
}

module.exports = authFactory;