/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for transport-regulations API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} transport-regulations API methods (cnrt)
 */
function transportRegulationsFactory({client, internalAuthTokenProvider}) {
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
    create({data, token, jwtToken, headers}) {
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
