const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for reference numbers API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function referenceNumbersFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /reference-numbers - create reference number. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.referenceNumberRequest - Reference number request payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, referenceNumberRequest, headers}) {
    return client({
      url: "/reference-numbers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {referenceNumberRequest}
    });
  }

  return {
    create
  };
}

module.exports = referenceNumbersFactory;
