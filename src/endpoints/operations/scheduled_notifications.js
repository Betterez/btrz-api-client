const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /scheduled-notifications (btrz-api-operations getSpec).
 * @typedef {Object} ScheduledNotificationsListQuery
 * @property {string} [groupId] - Group id to retrieve
 */

/**
 * Factory for scheduled-notifications API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} scheduled-notifications API methods
 */
function scheduledNotificationsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /scheduled-notifications - list scheduled notifications.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ScheduledNotificationsListQuery} [opts.query] - groupId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} GetScheduledNotificationsResponse
   */
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/scheduled-notifications",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /scheduled-notifications/:id - get scheduled notification by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Scheduled notification id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} 404 SCHEDULEDNOTIFICATION_NOT_FOUND
   */
  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /scheduled-notifications/:id - update scheduled notification. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Scheduled notification id (ObjectId)
   * @param {Object} opts.data - ScheduledNotificationPostData
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} 404 SCHEDULEDNOTIFICATION_NOT_FOUND, 409 SCHEDULED_NOTIFICATION_EXISTS
   */
  function update({token, jwtToken, id, data, headers, query}) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "put",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /scheduled-notifications/:id - remove scheduled notification. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Scheduled notification id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, id, headers}) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /scheduled-notifications - create scheduled notification. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - ScheduledNotificationPostData
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} 409 SCHEDULED_NOTIFICATION_EXISTS
   */
  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/scheduled-notifications",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = scheduledNotificationsFactory;
