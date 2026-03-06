const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for seatmaps seat API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ update: function }}
 */
function seatFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /seat - update seat.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.params] - Query/request params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, params, headers}) {
    return client({
      url: "/seat",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  return {
    update
  };
}

module.exports = seatFactory;
