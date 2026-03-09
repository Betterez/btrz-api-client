const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /custom-fields (btrz-api-inventory). See get-custom-fields getSpec().
 * @typedef {Object} InventoryCustomFieldsQuery
 * @property {string} [enabled] - Required value of the disabled field
 * @property {string} [required] - Required value of the required field
 * @property {string} [modelName] - Filter by model (Transactions, Stations)
 */

/**
 * Factory for custom-fields API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, types: { all: function } }}
 */
function customFieldsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /custom-fields - list custom fields (btrz-api-inventory).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryCustomFieldsQuery} [opts.query] - Query params (enabled, required, modelName)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customfields: Array }>>}
   * @throws When response is 4xx/5xx (e.g. 400 INVALID_MODEL_NAME, 401 Unauthorized, 500)
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/custom-fields",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /custom-fields/:customfieldId - get custom field by id (btrz-api-inventory). No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fieldId - Custom field id (24 hex chars; must start with accountId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customfield: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 CUSTOMFIELD_NOT_FOUND, 500)
   */
  function get({fieldId, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/custom-fields/${fieldId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /custom-fields - create custom field (btrz-api-inventory). No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.field - Field payload (FieldPutData: text, type, required, disabled, options when type List)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customfield: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 CUSTOMFIELD_NOT_FOUND/FIELD_NOT_FOUND, 500)
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
   * PUT /custom-fields/:fieldId - update custom field (btrz-api-inventory). No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fieldId - Field id (24 hex chars)
   * @param {Object} opts.field - Field payload (FieldPutData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customfield: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 CUSTOMFIELD_NOT_FOUND/FIELD_NOT_FOUND/WRONG_DATA_OPTIONS, 500)
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
     * GET /custom-fields/types - list custom field types (btrz-api-inventory). No query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ types: Array }>>}
     * @throws When response is 4xx/5xx (e.g. 401 Unauthorized, 500)
     */
    all({token, jwtToken, headers}) {
      return client({
        url: "/custom-fields/types",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
