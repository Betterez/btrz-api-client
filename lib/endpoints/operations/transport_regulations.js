

/* eslint-disable max-len */
const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for transport-regulations API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} transport-regulations API methods (cnrt)
 */


function transportRegulationsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  const cnrt = {
    /**
     * POST /transport-regulations/cnrt/manifests - create CNRT manifest. API does not accept query params.
     * @param {Object} opts
     * @param {Object} opts.data - Request body
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref2) {
      const data = _ref2.data;
      const token = _ref2.token;
      const jwtToken = _ref2.jwtToken;
      const headers = _ref2.headers;

      return client({
        url: "/transport-regulations/cnrt/manifests",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    cnrt
  };
}

module.exports = transportRegulationsFactory;
