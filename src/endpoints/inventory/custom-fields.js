const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for custom-fields endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryCustomFieldsQuery
 */

/**
 * Factory for custom-fields API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, types: object }}
 */
function customFieldsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /custom-fields - list custom fields.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryCustomFieldsQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/custom-fields",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /custom-fields/:fieldId - get custom field by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fieldId - Field id
   * @param {InventoryCustomFieldsQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({fieldId, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/custom-fields/${fieldId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /custom-fields - create custom field.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.field - Field payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, field, headers}) {
    return client({
      url: "/custom-fields",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {field}
    });
  }

  /**
   * PUT /custom-fields/:fieldId - update custom field.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fieldId - Field id
   * @param {Object} opts.field - Field payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, fieldId, field, headers}) {
    return client({
      url: `/custom-fields/${fieldId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {field}
    });
  }

  /** @type {{ all: function }} */
  const types = {
    /**
     * GET /custom-fields/types - list custom field types.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({token, headers}) {
      return client({
        url: "/custom-fields/types",
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    types
  };
}

module.exports = customFieldsFactory;
