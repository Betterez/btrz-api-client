

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /dynamic-forms (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} DynamicFormsQuery
 * @property {string} [dynamicFormFieldId] - Get all dynamic forms for the given field id (ObjectId)
 * @property {string} [providerId] - Get all dynamic forms for the given provider id (ObjectId)
 * @property {string} [type] - Filter by type: "reservation" | "parcel" | "checkin" | "paid_in" | "pay_on_account"
 */

/**
 * Query params for GET /dynamic-forms/:dynamicFormId (btrz-api-accounts). See get-by-id-handler getSpec().
 * @typedef {Object} DynamicFormByIdQuery
 * @property {string} [providerId] - Fetch the dynamic form for the given providerId (ObjectId)
 */

/**
 * Factory for dynamic-forms API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function, fields: { get: function, all: function, create: function, update: function, remove: function } }}
 */


function dynamicFormsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /dynamic-forms/:dynamicFormId - get a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.dynamicFormId - Dynamic form id (ObjectId)
   * @param {DynamicFormByIdQuery} [opts.query] - Query params (providerId)
   * @param {string} [opts.providerId] - Provider id; if set, added to query (convenience)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const dynamicFormId = _ref2.dynamicFormId;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;
    const providerId = _ref2.providerId;

    const query_ = providerId ? _extends({}, query, {providerId}) : query;
    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /dynamic-forms - list dynamic forms.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {DynamicFormsQuery} [opts.query] - Query params (dynamicFormFieldId, providerId, type)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: "/dynamic-forms",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /dynamic-forms - create a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Form payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const data = _ref4.data;
    const headers = _ref4.headers;

    return client({
      url: "/dynamic-forms",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  /**
   * PUT /dynamic-forms/:dynamicFormId - update a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.dynamicFormId - Dynamic form id (ObjectId)
   * @param {Object} opts.data - Form payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const dynamicFormId = _ref5.dynamicFormId;
    const data = _ref5.data;
    const headers = _ref5.headers;

    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /dynamic-forms/:dynamicFormId - delete a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.dynamicFormId - Dynamic form id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref6) {
    const dynamicFormId = _ref6.dynamicFormId;
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;

    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const fields = {
    /**
     * GET /dynamic-forms/fields/:dynamicFormFieldId - get a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.dynamicFormFieldId - Field id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get() {
      const _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const token = _ref7.token;
      const jwtToken = _ref7.jwtToken;
      const dynamicFormFieldId = _ref7.dynamicFormFieldId;
      const headers = _ref7.headers;

      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * GET /dynamic-forms/fields - list dynamic form fields.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref8) {
      const token = _ref8.token;
      const jwtToken = _ref8.jwtToken;
      const _ref8$query = _ref8.query;
      const query = _ref8$query === undefined ? {} : _ref8$query;
      const headers = _ref8.headers;

      return client({
        url: "/dynamic-forms/fields",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * POST /dynamic-forms/fields - create a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Field payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref9) {
      const jwtToken = _ref9.jwtToken;
      const token = _ref9.token;
      const data = _ref9.data;
      const headers = _ref9.headers;

      return client({
        url: "/dynamic-forms/fields",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },

    /**
     * PUT /dynamic-forms/fields/:dynamicFormFieldId - update a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.dynamicFormFieldId - Field id (ObjectId)
     * @param {Object} opts.data - Field payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref10) {
      const jwtToken = _ref10.jwtToken;
      const token = _ref10.token;
      const dynamicFormFieldId = _ref10.dynamicFormFieldId;
      const data = _ref10.data;
      const headers = _ref10.headers;

      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },

    /**
     * DELETE /dynamic-forms/fields/:dynamicFormFieldId - delete a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.dynamicFormFieldId - Field id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref11) {
      const dynamicFormFieldId = _ref11.dynamicFormFieldId;
      const token = _ref11.token;
      const jwtToken = _ref11.jwtToken;
      const headers = _ref11.headers;

      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    get,
    all,
    create,
    update,
    remove,
    fields
  };
}

module.exports = dynamicFormsFactory;
