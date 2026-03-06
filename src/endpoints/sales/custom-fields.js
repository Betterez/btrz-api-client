/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function customFieldsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /custom-fields - list custom fields.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {CustomFieldsListQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
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
