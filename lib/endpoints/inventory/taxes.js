

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/taxes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
    const taxId = _ref3.taxId;
    const token = _ref3.token;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client.get(`/taxes/${taxId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
    const jwtToken = _ref4.jwtToken;
    const tax = _ref4.tax;
    const token = _ref4.token;
    const headers = _ref4.headers;

    return client({
      url: "/taxes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tax}
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
    const jwtToken = _ref5.jwtToken;
    const token = _ref5.token;
    const taxId = _ref5.taxId;
    const tax = _ref5.tax;
    const headers = _ref5.headers;

    return client({
      url: `/taxes/${taxId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tax}
    });
  }

  /** @type {{ create: function, update: function, get: function, all: function, delete: function }} */
  const exceptions = {
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
      const jwtToken = _ref6.jwtToken;
      const token = _ref6.token;
      const taxException = _ref6.taxException;
      const headers = _ref6.headers;

      return client({
        url: "/taxes/exceptions",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {taxException}
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
      const jwtToken = _ref7.jwtToken;
      const token = _ref7.token;
      const taxExceptionId = _ref7.taxExceptionId;
      const taxException = _ref7.taxException;
      const headers = _ref7.headers;

      return client({
        url: `/taxes/exceptions/${taxExceptionId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {taxException}
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
      const jwtToken = _ref8.jwtToken;
      const token = _ref8.token;
      const taxExceptionId = _ref8.taxExceptionId;
      const headers = _ref8.headers;

      return client({
        url: `/taxes/exceptions/${taxExceptionId}`,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      const jwtToken = _ref9.jwtToken;
      const token = _ref9.token;
      const _ref9$query = _ref9.query;
      const query = _ref9$query === undefined ? {} : _ref9$query;
      const headers = _ref9.headers;

      return client({
        url: "/taxes/exceptions",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      const jwtToken = _ref10.jwtToken;
      const token = _ref10.token;
      const taxExceptionId = _ref10.taxExceptionId;
      const headers = _ref10.headers;

      return client({
        url: `/taxes/exceptions/${taxExceptionId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    exceptions
  };
}

module.exports = taxesFactory;
