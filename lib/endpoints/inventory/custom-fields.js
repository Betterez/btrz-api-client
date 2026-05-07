"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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


function customFieldsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/custom-fields",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function get(_ref3) {
    var fieldId = _ref3.fieldId,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/custom-fields/" + fieldId,
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        field = _ref4.field,
        headers = _ref4.headers;

    return client({
      url: "/custom-fields",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { field: field }
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
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        fieldId = _ref5.fieldId,
        field = _ref5.field,
        headers = _ref5.headers;

    return client({
      url: "/custom-fields/" + fieldId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { field: field }
    });
  }

  /** @type {{ all: function }} */
  var types = {
    /**
     * GET /custom-fields/types - list custom field types (btrz-api-inventory). No query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ types: Array }>>}
     * @throws When response is 4xx/5xx (e.g. 401 Unauthorized, 500)
     */
    all: function all(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          headers = _ref6.headers;

      return client({
        url: "/custom-fields/types",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    types: types
  };
}

module.exports = customFieldsFactory;