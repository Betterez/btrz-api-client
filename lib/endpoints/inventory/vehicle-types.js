const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

function vehicleTypesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET all vehicle types (e.g. Bus, Shuttle, Van, Train, Ferry, Tram).
   * Used when configuring schedule vehicle type or displaying vehicle type in trips/manifests.
   * @param {Object} opts
   * @param {string} opts.token - API key token
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<{data: {vehicleTypes: Array<{_id: string, name: string}>}}>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
