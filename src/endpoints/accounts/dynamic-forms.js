/* eslint-disable max-len */
const {authorizationHeaders} = require("../endpoints_helpers.js");

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
function dynamicFormsFactory({client, internalAuthTokenProvider}) {
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
  function get({token, jwtToken, dynamicFormId, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
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
  function all({token, jwtToken, query = {}, headers}) {
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
  function create({token, jwtToken, query = {}, data, headers}) {
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
  function update({token, jwtToken, dynamicFormId, data, headers}) {
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
  function remove({dynamicFormId, token, jwtToken, headers}) {
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
    get({token, jwtToken, dynamicFormFieldId, headers} = {}) {
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
    all({token, jwtToken, query = {}, headers}) {
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
    create({jwtToken, token, data, headers}) {
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
    update({jwtToken, token, dynamicFormFieldId, data, headers}) {
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
    remove({dynamicFormFieldId, token, jwtToken, headers}) {
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
