const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /tax-statuses (btrz-api-inventory). Forwarded to the API as-is.
 * @typedef {Object.<string, *>} TaxStatusesListQuery
 */

/**
 * Body for POST /tax-statuses and PUT /tax-statuses/:taxStatusId (btrz-api-inventory).
 * @typedef {Object} TaxStatusData
 * @property {string} name - Tax status name
 * @property {number} percentage - Percentage already multiplied by 1000. 21000 means 21 percent. The client forwards the value and does not scale it.
 */

/**
 * Factory for tax-statuses API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function taxStatusesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /tax-statuses - list tax statuses.
   * Response body: { taxStatuses: Object[], count: number }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TaxStatusesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{taxStatuses: Object[], count: number}>>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/tax-statuses", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /tax-statuses/:taxStatusId - get a tax status by id.
   * Response body: { taxStatus }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.taxStatusId - Tax status id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{taxStatus: Object}>>}
   */
  function get({token, jwtToken, taxStatusId, headers}) {
    return client({
      url: `/tax-statuses/${taxStatusId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /tax-statuses - create a tax status.
   * Response body: { taxStatus }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TaxStatusData} opts.data - Tax status payload (name, percentage)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{taxStatus: Object}>>}
   */
  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/tax-statuses",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /tax-statuses/:taxStatusId - update a tax status.
   * Response body: { taxStatus }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.taxStatusId - Tax status id (24-char hex ObjectId)
   * @param {TaxStatusData} opts.data - Tax status payload (name, percentage)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{taxStatus: Object}>>}
   */
  function update({token, jwtToken, taxStatusId, data, headers}) {
    return client({
      url: `/tax-statuses/${taxStatusId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /tax-statuses/:taxStatusId - delete a tax status.
   * Response body: { taxStatusId }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.taxStatusId - Tax status id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{taxStatusId: string}>>}
   */
  function remove({token, jwtToken, taxStatusId, headers}) {
    return client({
      url: `/tax-statuses/${taxStatusId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = taxStatusesFactory;
