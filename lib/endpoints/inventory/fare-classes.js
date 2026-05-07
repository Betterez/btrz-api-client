

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fare-classes (btrz-api-inventory). See get-fare-classes getSpec().
 * @typedef {Object} InventoryFareClassesQuery
 * @property {string} [providerId] - Provider whose fare classes to return
 * @property {string} [productIds] - Comma-separated product IDs to get fare classes for
 */

/**
 * Factory for fare-classes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function }}
 */


function fareClassesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fare-classes - list fare classes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryFareClassesQuery} [opts.query] - Query params (providerId, productIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/fare-classes",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fare-classes - create fare class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fareClass - Fare class payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const fareClass = _ref3.fareClass;
    const headers = _ref3.headers;

    return client({
      url: "/fare-classes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fareClass}
    });
  }

  /**
   * PATCH /fare-classes/:fareClassId - update fare class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fareClassId - Fare class id
   * @param {Object} opts.update - Update payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  // eslint-disable-next-line no-shadow -- param name matches API
  function update(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const fareClassId = _ref4.fareClassId;
    const update = _ref4.update;
    const headers = _ref4.headers;

    return client({
      url: `/fare-classes/${fareClassId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {update}
    });
  }

  return {
    all,
    create,
    update
  };
}

module.exports = fareClassesFactory;
