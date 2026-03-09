const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /insurances (btrz-api-inventory). See get-insurances getSpec().
 * @typedef {Object} InsurancesListQuery
 * @property {string} [productId] - The ids of the products to get insurances for
 * @property {string} [enabled] - Filter insurances if they are enabled or not [true, false]
 * @property {string} [providerIds] - The ids of the providers to get products for
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
   * GET /insurances - list insurances for the account and product provided.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InsurancesListQuery} [opts.query] - Query params (productId, enabled, providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ insurances: Object[] }>>}
   * @throws 400 INVALID_PRODUCTIDS; 401; 500.
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
   * GET /insurances/:insuranceId - get insurance by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.insuranceId - Insurance id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ insurance: Object }>>}
   * @throws 400 INVALID_INSURANCE_ID; 401; 404 INSURANCE_NOT_FOUND; 500.
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
   * PUT /insurances/:insuranceId - update insurance.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.insurance - Insurance payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.insuranceId - Insurance id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ insurance: Object }>>}
   * @throws 400 WRONG_DATA; 401; 404 INSURANCE_NOT_FOUND; 500.
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
   * DELETE /insurances/:insuranceId - remove insurance.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.insuranceId - Insurance id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ insuranceId: string }>>}
   * @throws 400 INVALID_INSURANCE_ID; 401; 404 INSURANCE_NOT_FOUND; 500.
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
