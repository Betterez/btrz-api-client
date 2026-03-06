const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for seatmaps access ticket API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function accessTicketFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /access-ticket - create access ticket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, headers}) {
    return client({
      url: "/access-ticket",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create
  };
}

module.exports = accessTicketFactory;
