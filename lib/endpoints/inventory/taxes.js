"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /taxes (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} TaxesQuery
 * @property {string} [providerIds] - The id of the providers to get taxes for
 */

/**
 * Query params for GET /taxes/exceptions (btrz-api-inventory). See get-tax-exceptions-handler getSpec().
 * @typedef {Object} TaxExceptionsListQuery
 * @property {string} [originId] - Origin station id (24 hex characters)
 * @property {string} [destinationId] - Destination station id (24 hex characters)
 * @property {number} [page] - Page to return
 * @property {number} [recordsPerPage] - Records per page
 */

/**
 * Factory for taxes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, exceptions: object }}
 */


function taxesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /taxes - list taxes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TaxesQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/taxes", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /taxes/:taxId - get tax by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.taxId - Tax id (ObjectId format)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var taxId = _ref3.taxId,
        token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/taxes/" + taxId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /taxes - create tax.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.tax - Tax payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        tax = _ref4.tax,
        token = _ref4.token,
        headers = _ref4.headers;

    return client({
      url: "/taxes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { tax: tax }
    });
  }

  /**
   * PUT /taxes/:taxId - update tax.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.taxId - Tax id
   * @param {Object} opts.tax - Tax payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        taxId = _ref5.taxId,
        tax = _ref5.tax,
        headers = _ref5.headers;

    return client({
      url: "/taxes/" + taxId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { tax: tax }
    });
  }

  /** @type {{ create: function, update: function, get: function, all: function, delete: function }} */
  var exceptions = {
    /**
     * POST /taxes/exceptions - create tax exception.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.taxException - Tax exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref6) {
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          taxException = _ref6.taxException,
          headers = _ref6.headers;

      return client({
        url: "/taxes/exceptions",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { taxException: taxException }
      });
    },

    /**
     * PUT /taxes/exceptions/:taxExceptionId - update tax exception.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.taxExceptionId - Tax exception id
     * @param {Object} opts.taxException - Tax exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          taxExceptionId = _ref7.taxExceptionId,
          taxException = _ref7.taxException,
          headers = _ref7.headers;

      return client({
        url: "/taxes/exceptions/" + taxExceptionId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { taxException: taxException }
      });
    },

    /**
     * GET /taxes/exceptions/:taxExceptionId - get tax exception.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.taxExceptionId - Tax exception id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref8) {
      var jwtToken = _ref8.jwtToken,
          token = _ref8.token,
          taxExceptionId = _ref8.taxExceptionId,
          headers = _ref8.headers;

      return client({
        url: "/taxes/exceptions/" + taxExceptionId,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * GET /taxes/exceptions - list tax exceptions.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref9) {
      var jwtToken = _ref9.jwtToken,
          token = _ref9.token,
          _ref9$query = _ref9.query,
          query = _ref9$query === undefined ? {} : _ref9$query,
          headers = _ref9.headers;

      return client({
        url: "/taxes/exceptions",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * DELETE /taxes/exceptions/:taxExceptionId - delete tax exception.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.taxExceptionId - Tax exception id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref10) {
      var jwtToken = _ref10.jwtToken,
          token = _ref10.token,
          taxExceptionId = _ref10.taxExceptionId,
          headers = _ref10.headers;

      return client({
        url: "/taxes/exceptions/" + taxExceptionId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    exceptions: exceptions
  };
}

module.exports = taxesFactory;