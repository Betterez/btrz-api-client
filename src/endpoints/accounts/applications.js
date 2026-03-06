/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for applications API (btrz-api-accounts): get by id or by name. Requires BETTEREZ_APP or MOBILE_SCANNER (get by id); get by name requires authentication.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, getByName: function }}
 */
function applicationsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /applications/:id - get an application by id. Application must belong to the authenticated account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Application id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Response data: { application } (full application document including privateKey)
   */
  function get({token, id, jwtToken, headers}) {
    return client.get(`/applications/${id}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }
  /**
   * GET /applications/name/:appName - get an application by name. Returns non-internal, non-deleted application for the account; response excludes privateKey.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.appName - Application name (exact match)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Response data: { application } (application document without privateKey)
   */
  function getByName({token, appName, jwtToken, headers}) {
    return client.get(`/applications/name/${appName}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    getByName
  };
}


module.exports = applicationsFactory;
