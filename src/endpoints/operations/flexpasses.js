const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for flexpasses API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} flexpasses API methods
 */
function flexpassesFactory({client, internalAuthTokenProvider}) {
  /**
   * DELETE /flexpasses/:flexpassId/scannings/:tripId - delete scan by trip id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.flexpassId - Flexpass id
   * @param {string} opts.tripId - Trip id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteScanBytripId({jwtToken, token, flexpassId, tripId, headers}) {
    return client({
      url: `/flexpasses/${flexpassId}/scannings/${tripId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    deleteScanBytripId
  };
}

module.exports = flexpassesFactory;
