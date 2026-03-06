"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for email-settings API (btrz-api-accounts).
 * Manage account email settings (identity/verified senders). Path parameter is email address.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getByEmail: function, create: function, update: function, remove: function }}
 */


function emailSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /email-settings – List all email settings for the account.
   * Response may trigger AWS verification and commIdentity updates. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailSettings: object[] }>>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      params: query,
      url: "/email-settings",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }
  /**
   * GET /email-settings/:email – Get one email setting by email address (path param).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.email - Email address (path parameter; must match email pattern)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<object>>} response.data is EmailSetting
   */
  function getByEmail(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        email = _ref3.email,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      params: query,
      url: "/email-settings/" + email,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /email-settings – Create an email setting. Requires BETTEREZ_APP JWT. Emits emailSetting.created.
   * Body: { emailSetting } or { name, email, active }. Email and domain are verified in AWS.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (required for BETTEREZ_APP audience)
   * @param {Object} opts.data - Body: { name, email, active? } or { emailSetting: { name, email, active? } }
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailSetting: object }>>}
   */
  function create(_ref4) {
    var data = _ref4.data,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/email-settings",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * PUT /email-settings/:email – Update an email setting. Requires BETTEREZ_APP JWT. Emits emailSetting.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (required for BETTEREZ_APP audience)
   * @param {string} opts.email - Email address (path parameter)
   * @param {Object} opts.data - Body: { name, email, active?, ... } or { emailSetting: { ... } }
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailSetting: object }>>}
   */
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        email = _ref5.email,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/email-settings/" + email,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * DELETE /email-settings/:email – Remove an email setting. Requires BETTEREZ_APP JWT. Emits emailSetting.deleted.
   * Fails with 400 if the email is currently active.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (required for BETTEREZ_APP audience)
   * @param {string} opts.email - Email address (path parameter)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailSetting: object }>>}
   */
  function remove(_ref6) {
    var email = _ref6.email,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/email-settings/" + email,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    getByEmail: getByEmail,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = emailSettingsFactory;