

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for zone-price-overages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function zonePriceOverageFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /zone-price-overages - list zone price overages. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/zone-price-overages", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /zone-price-overages/:zonePriceOverageId - get zone price overage by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    const zonePriceOverageId = _ref3.zonePriceOverageId;
    const token = _ref3.token;
    const headers = _ref3.headers;

    return client.get(`/zone-price-overages/${zonePriceOverageId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /zone-price-overages - create zone price overage(s). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.zonePriceOverages - Zone price overages payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const zonePriceOverages = _ref4.zonePriceOverages;
    const headers = _ref4.headers;

    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePriceOverages
      }
    });
  }

  /**
   * DELETE /zone-price-overages/:zonePriceOverageId - remove zone price overage.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const zonePriceOverageId = _ref5.zonePriceOverageId;
    const token = _ref5.token;
    const headers = _ref5.headers;

    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /zone-price-overages/:zonePriceOverageId - update zone price overage. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {Object} opts.zonePriceOverages - Zone price overages payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const zonePriceOverageId = _ref6.zonePriceOverageId;
    const zonePriceOverages = _ref6.zonePriceOverages;
    const headers = _ref6.headers;

    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePriceOverages
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = zonePriceOverageFactory;
