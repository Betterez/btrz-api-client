const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Templates of a notification sub type, by channel and language.
 * @typedef {Object} NotificationSubTypeTemplates
 * @property {Object.<string, string>} [email] - Language (for example "en-us") to email template id
 * @property {Object.<string, string>} [sms] - Language (for example "en-us") to sms template id
 */

/**
 * Body of POST and PUT /notification-sub-types (btrz-api-accounts).
 * @typedef {Object} NotificationSubTypeData
 * @property {string} name - Sub type name, 1 to 60 characters, unique per account (case-insensitive)
 * @property {NotificationSubTypeTemplates} templates - At least one channel with at least one language
 */

/**
 * Factory for notification-sub-types API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function notificationSubTypesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /notification-sub-types - list the notification sub types of the account, sorted by name.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, headers}) {
    return client({
      url: "/notification-sub-types",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /notification-sub-types/:notificationSubTypeId - get a notification sub type by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.notificationSubTypeId - Sub type id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, notificationSubTypeId, headers}) {
    return client({
      url: `/notification-sub-types/${notificationSubTypeId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /notification-sub-types - create a notification sub type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {NotificationSubTypeData} opts.notificationSubType - Sub type data, sent as the request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, notificationSubType, headers}) {
    return client({
      url: "/notification-sub-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: notificationSubType
    });
  }

  /**
   * PUT /notification-sub-types/:notificationSubTypeId - replace the name and templates of a sub type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.notificationSubTypeId - Sub type id (24-char hex ObjectId)
   * @param {NotificationSubTypeData} opts.notificationSubType - Sub type data, sent as the request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, notificationSubTypeId, notificationSubType, headers}) {
    return client({
      url: `/notification-sub-types/${notificationSubTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: notificationSubType
    });
  }

  /**
   * DELETE /notification-sub-types/:notificationSubTypeId - delete a notification sub type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.notificationSubTypeId - Sub type id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, notificationSubTypeId, headers}) {
    return client({
      url: `/notification-sub-types/${notificationSubTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = notificationSubTypesFactory;
