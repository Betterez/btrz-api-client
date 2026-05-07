

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for invoice provider sequences API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, remove: function, create: function, update: function }}
 */


function providersSequencesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /providers/:invoiceProviderId/sequences - list provider sequences. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.invoiceProviderId - Invoice provider id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 404 PROVIDER_NOT_FOUND
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const invoiceProviderId = _ref2.invoiceProviderId;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const invoiceProviderId = _ref3.invoiceProviderId;
    const invoiceProviderSequenceId = _ref3.invoiceProviderSequenceId;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

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
  function remove(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const invoiceProviderId = _ref4.invoiceProviderId;
    const id = _ref4.id;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const headers = _ref4.headers;

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
  function create(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const invoiceProviderId = _ref5.invoiceProviderId;
    const data = _ref5.data;
    const _ref5$query = _ref5.query;
    const query = _ref5$query === undefined ? {} : _ref5$query;
    const headers = _ref5.headers;

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
  function update(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const invoiceProviderId = _ref6.invoiceProviderId;
    const invoiceProviderSequenceId = _ref6.invoiceProviderSequenceId;
    const data = _ref6.data;
    const _ref6$query = _ref6.query;
    const query = _ref6$query === undefined ? {} : _ref6$query;
    const headers = _ref6.headers;

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
