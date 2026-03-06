/* eslint-disable max-len */
const {authorizationHeaders} = require("../endpoints_helpers.js");

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
   * @param {Object} [opts.query] - Query params
   * @param {string} [opts.providerId] - Provider id (ObjectId)
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
   * @param {Object} [opts.query] - Query params
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
   * @param {Object} [opts.query] - Query params
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
     * @param {Object} [opts.query] - Query params
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
