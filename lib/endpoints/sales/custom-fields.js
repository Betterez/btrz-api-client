

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /custom-fields (btrz-api-sales get-custom-fields getSpec).
 * @typedef {Object} CustomFieldsListQuery
 * @property {string} [providerIds] - One or more provider account ids (comma-separated)
 */

/**
 * Factory for custom-fields API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function customFieldsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /custom-fields - list custom fields.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {CustomFieldsListQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/custom-fields", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = customFieldsFactory;
