/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for email-settings API (btrz-api-accounts).
 * Manage account email settings (identity/verified senders). Path parameter is email address.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getByEmail: function, create: function, update: function, remove: function }}
 */
function emailSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /email-settings – List all email settings for the account.
   * Response may trigger AWS verification and commIdentity updates. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailSettings: object[] }>>}
   */
  function all({token, jwtToken, query = {}, headers}) {
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
  function getByEmail({token, jwtToken, email, query = {}, headers}) {
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
  function create({data, token, jwtToken, headers}) {
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
  function update({token, jwtToken, email, data, headers}) {
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
  function remove({email, token, jwtToken, headers}) {
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
