const {authorizationHeaders} = require("../endpoints_helpers.js");

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
function taxesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /taxes - list taxes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TaxesQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
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
  function get({taxId, token, query = {}, headers}) {
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
  function create({jwtToken, tax, token, headers}) {
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
  function update({jwtToken, token, taxId, tax, headers}) {
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
    create({jwtToken, token, taxException, headers}) {
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
    update({jwtToken, token, taxExceptionId, taxException, headers}) {
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
    get({jwtToken, token, taxExceptionId, headers}) {
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
    all({jwtToken, token, query = {}, headers}) {
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
    delete({jwtToken, token, taxExceptionId, headers}) {
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
