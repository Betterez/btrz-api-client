

/* eslint-disable import/extensions */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for email-settings API (btrz-api-accounts).
 * Manage account email settings (identity/verified senders). Path parameter is email address.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getByEmail: function, create: function, update: function, remove: function }}
 */


function emailSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      params: query,
      url: "/email-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const email = _ref3.email;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      params: query,
      url: `/email-settings/${email}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const data = _ref4.data;
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const headers = _ref4.headers;

    return client({
      url: "/email-settings",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
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
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const email = _ref5.email;
    const data = _ref5.data;
    const headers = _ref5.headers;

    return client({
      url: `/email-settings/${email}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
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
    const email = _ref6.email;
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;

    return client({
      url: `/email-settings/${email}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    getByEmail,
    create,
    update,
    remove
  };
}

module.exports = emailSettingsFactory;
