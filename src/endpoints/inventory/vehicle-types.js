const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function vehicleTypesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET all vehicle types (e.g. Bus, Shuttle, Van, Train, Ferry, Tram).
   * Used when configuring schedule vehicle type or displaying vehicle type in trips/manifests.
   * @param {Object} opts
   * @param {string} opts.token - API key token
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<{data: {vehicleTypes: Array<{_id: string, name: string}>}}>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/vehicle-types", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = vehicleTypesFactory;
