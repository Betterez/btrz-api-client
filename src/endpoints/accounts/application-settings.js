const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} ApplicationSettingsQuery
 * @property {string} [name] - The application name
 */

/**
 * Factory for application-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function, remove: function, regenerateKeys: function, create: function }}
 */
function applicationSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /application-settings/:providerId - get application settings for provider.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.providerId - Provider id (ObjectId)
   * @param {ApplicationSettingsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, providerId, jwtToken, query = {}, headers}) {
    return client.get(`/application-settings/${providerId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * PUT /application-settings/:id - update application settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Application settings id (ObjectId)
   * @param {Object} opts.application - Application payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, id, application, headers}) {
    return client({
      url: `/application-settings/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {application}
    });
  }

  /**
   * DELETE /application-settings/:id - remove application settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Application settings id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, token, id, headers}) {
    return client({
      url: `/application-settings/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /application-settings/:id/keys - regenerate application keys.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Application settings id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function regenerateKeys({jwtToken, token, id, headers}) {
    return client({
      url: `/application-settings/${id}/keys`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /application-settings - create application settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.application - Application payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, application, headers}) {
    return client({
      url: "/application-settings",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {application}
    });
  }

  return {
    get,
    update,
    remove,
    regenerateKeys,
    create
  };
}

module.exports = applicationSettingsFactory;
