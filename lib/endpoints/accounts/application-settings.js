

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} ApplicationSettingsQuery
 * @property {string} [name] - Optional. Filter by application name. When set, unauthenticated returns one object or 404; authenticated returns array with at most one item.
 */

/**
 * Factory for application-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function, remove: function, regenerateKeys: function, create: function }}
 */


function applicationSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /application-settings/:providerId - get application settings for a provider (account). Auth is optional: without auth returns one public object { key, settings, requestEndpoint }; with valid token returns array of application documents (see API docs for privateKey handling for internal apps).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.providerId - Account (provider) ID whose application settings to return
   * @param {ApplicationSettingsQuery} [opts.query] - Optional query; use name to filter by application name
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Response data: unauthenticated = { key, settings, requestEndpoint }; authenticated = array of application objects (see API docs)
   */
  function get(_ref2) {
    const token = _ref2.token;
    const providerId = _ref2.providerId;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get(`/application-settings/${providerId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * PUT /application-settings/:id - update an application. Body can be { application: { name, description?, settings?, requestEndpoint?, enableUserSignOn?, channels?, roles? } } or direct. Emits webhook applications.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Application id (24-char hex ObjectId)
   * @param {Object} opts.application - Application payload (name required; optional description, settings, requestEndpoint, enableUserSignOn, channels, roles)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Response data: { application }
   */
  function update(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const id = _ref3.id;
    const application = _ref3.application;
    const headers = _ref3.headers;

    return client({
      url: `/application-settings/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {application}
    });
  }

  /**
   * DELETE /application-settings/:id - soft-delete an application. Emits webhook applications.deleted.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Application id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Response data: { id } (deleted application id)
   */
  function remove(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const id = _ref4.id;
    const headers = _ref4.headers;

    return client({
      url: `/application-settings/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /application-settings/:id/keys - regenerate application keys; returns new key and privateKey. Emits webhook applications.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Application id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Response data: { keys: { key, privateKey } }
   */
  function regenerateKeys(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const token = _ref5.token;
    const id = _ref5.id;
    const headers = _ref5.headers;

    return client({
      url: `/application-settings/${id}/keys`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /application-settings - create an application. Body can be { application: { name, description?, settings?, requestEndpoint?, enableUserSignOn?, channels?, roles? } } or direct. Emits webhook applications.created.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.application - Application payload (name required; optional description, settings, requestEndpoint, enableUserSignOn, channels, roles)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Response data: { application }
   */
  function create(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const application = _ref6.application;
    const headers = _ref6.headers;

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
