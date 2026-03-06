const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /insurances (btrz-api-inventory). See get-insurances getSpec().
 * @typedef {Object} InsurancesListQuery
 * @property {string} [productId] - Filter by product id
 * @property {boolean} [enabled] - Filter by enabled
 * @property {string[]} [providerIds] - Filter by provider ids
 */

/**
 * Factory for insurances API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, get: function, update: function, remove: function }}
 */
function insurancesFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /insurances - list insurances.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InsurancesListQuery} [opts.query] - Query params (productId, enabled, providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token, query = {}, headers
  }) {
    return client.get("/insurances", {
      params: query,
      headers: authorizationHeaders({
        token, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * GET /insurances/:insuranceId - get insurance by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.insuranceId - Insurance id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    token, insuranceId, headers
  }) {
    return client.get(`/insurances/${insuranceId}`, {
      headers: authorizationHeaders({
        token, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * POST /insurances - create insurance. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.insurance - Insurance payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token, insurance, jwtToken, headers
  }) {
    return client({
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        insurance
      }
    });
  }

  /**
   * PUT /insurances/:insuranceId - update insurance. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.insurance - Insurance payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.insuranceId - Insurance id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({
    token, insurance, jwtToken, insuranceId, headers
  }) {
    return client({
      url: `/insurances/${insuranceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        insurance
      }
    });
  }

  /**
   * DELETE /insurances/:insuranceId - remove insurance. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.insuranceId - Insurance id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({
    token, jwtToken, insuranceId, headers
  }) {
    return client({
      url: `/insurances/${insuranceId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  return {
    all,
    create,
    get,
    update,
    remove
  };
}

module.exports = insurancesFactory;
