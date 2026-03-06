/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for invoice provider sequences API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, remove: function, create: function, update: function }}
 */
function providersSequencesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /providers/:invoiceProviderId/sequences - list provider sequences. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.invoiceProviderId - Invoice provider id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 404 PROVIDER_NOT_FOUND
   */
  function all({token, jwtToken, invoiceProviderId, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /providers/:invoiceProviderId/sequences/:invoiceProviderSequenceId - get provider sequence. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.invoiceProviderId - Invoice provider id
   * @param {string} opts.invoiceProviderSequenceId - Sequence id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences/${invoiceProviderSequenceId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * DELETE /providers/:invoiceProviderId/sequences/:id - remove provider sequence. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.invoiceProviderId - Invoice provider id
   * @param {string} opts.id - Sequence id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, invoiceProviderId, id, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /providers/:invoiceProviderId/sequences - create provider sequence. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.invoiceProviderId - Invoice provider id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, invoiceProviderId, data, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  /**
   * PUT /providers/:invoiceProviderId/sequences/:invoiceProviderSequenceId - update provider sequence. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.invoiceProviderId - Invoice provider id
   * @param {string} opts.invoiceProviderSequenceId - Sequence id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, data, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences/${invoiceProviderSequenceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    remove,
    create,
    update
  };
}

module.exports = providersSequencesFactory;
