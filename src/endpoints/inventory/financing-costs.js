const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /financing-costs (btrz-api-inventory). See get-financing-costs getSpec().
 * @typedef {Object} FinancingCostsListQuery
 * @property {number} [page] - Page number
 * @property {string} [providerId] - Provider to get financing costs for
 */

/**
 * Query params for GET /financing-costs/:id (btrz-api-inventory). See get-financing-cost-by-id getSpec().
 * @typedef {Object} FinancingCostGetQuery
 * @property {string} [providerId] - Provider to get financing cost for
 */

/**
 * Factory for financing-costs API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function financingCostsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /financing-costs - list financing costs.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {FinancingCostsListQuery} [opts.query] - Query params (page, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/financing-costs", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /financing-costs/:id - get financing cost by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Financing cost id
   * @param {FinancingCostGetQuery} [opts.query] - Query params (providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    id,
    token,
    headers,
    jwtToken,
    query = {}
  }) {
    return client.get(`/financing-costs/${id}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /financing-costs - create financing cost. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.financingCost - Financing cost payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, financingCost, headers}) {
    return client({
      url: "/financing-costs",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        financingcost: financingCost
      }
    });
  }

  /**
   * DELETE /financing-costs/:id - remove financing cost. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Financing cost id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, id, token, headers, query = {}}) {
    return client({
      url: `/financing-costs/${id}`,
      method: "delete",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /financing-costs/:id - update financing cost. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Financing cost id
   * @param {Object} opts.financingCost - Financing cost payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, id, financingCost, headers}) {
    return client({
      url: `/financing-costs/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        financingcost: financingCost
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

module.exports = financingCostsFactory;
