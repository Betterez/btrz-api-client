

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function scheduledNotificationsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /scheduled-notifications - list scheduled notifications.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ScheduledNotificationsListQuery} [opts.query] - groupId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} GetScheduledNotificationsResponse
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const query = _ref2.query;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const headers = _ref3.headers;

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
  function update(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const id = _ref4.id;
    const data = _ref4.data;
    const headers = _ref4.headers;
    const query = _ref4.query;

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
  function remove(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const id = _ref5.id;
    const headers = _ref5.headers;

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
  function create(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const _ref6$query = _ref6.query;
    const query = _ref6$query === undefined ? {} : _ref6$query;
    const data = _ref6.data;
    const headers = _ref6.headers;

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
