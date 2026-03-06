"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for dynamic-forms API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function, fields: { get: function, all: function, create: function, update: function, remove: function } }}
 */


function dynamicFormsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        dynamicFormId = _ref2.dynamicFormId,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers,
        providerId = _ref2.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/dynamic-forms/" + dynamicFormId,
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/dynamic-forms",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/dynamic-forms",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
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
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        dynamicFormId = _ref5.dynamicFormId,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/dynamic-forms/" + dynamicFormId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
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
    var dynamicFormId = _ref6.dynamicFormId,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/dynamic-forms/" + dynamicFormId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  var fields = {
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
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          dynamicFormFieldId = _ref7.dynamicFormFieldId,
          headers = _ref7.headers;

      return client({
        url: "/dynamic-forms/fields/" + dynamicFormFieldId,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    all: function all(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          _ref8$query = _ref8.query,
          query = _ref8$query === undefined ? {} : _ref8$query,
          headers = _ref8.headers;

      return client({
        url: "/dynamic-forms/fields",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
      var jwtToken = _ref9.jwtToken,
          token = _ref9.token,
          data = _ref9.data,
          headers = _ref9.headers;

      return client({
        url: "/dynamic-forms/fields",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
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
      var jwtToken = _ref10.jwtToken,
          token = _ref10.token,
          dynamicFormFieldId = _ref10.dynamicFormFieldId,
          data = _ref10.data,
          headers = _ref10.headers;

      return client({
        url: "/dynamic-forms/fields/" + dynamicFormFieldId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
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
      var dynamicFormFieldId = _ref11.dynamicFormFieldId,
          token = _ref11.token,
          jwtToken = _ref11.jwtToken,
          headers = _ref11.headers;

      return client({
        url: "/dynamic-forms/fields/" + dynamicFormFieldId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    get: get,
    all: all,
    create: create,
    update: update,
    remove: remove,
    fields: fields
  };
}

module.exports = dynamicFormsFactory;