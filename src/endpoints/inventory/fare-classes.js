const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function fareClassesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /fare-classes - list fare classes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryFareClassesQuery} [opts.query] - Query params (providerId, productIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
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
  function create({token, jwtToken, fareClass, headers}) {
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
  function update({token, jwtToken, fareClassId, update, headers}) {
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
