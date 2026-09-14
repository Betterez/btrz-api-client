const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /operator-notifications (btrz-api-notifications getSpec).
 * @typedef {Object} OperatorNotificationsListQuery
 * @property {number|string} [page] - Page number for pagination
 */

/**
 * Factory for operator-notifications API (btrz-api-notifications).
 * Operator purchase / capacity / SSR notification config documents.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} operator-notifications API methods
 */
function operatorNotificationsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /operator-notifications - list operator notification configs for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OperatorNotificationsListQuery} [opts.query] - page
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} GetOperatorNotificationsResponse
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/operator-notifications",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /operator-notifications/:id - get operator notification by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Operator notification id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} 404 OPERATOR_NOTIFICATION_NOT_FOUND
   */
  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/operator-notifications/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /operator-notifications - create one document per product. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - OperatorNotificationCreateData (or {operatorNotification: ...})
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} CreateOperatorNotificationsResponse
   */
  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/operator-notifications",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /operator-notifications/:id - update mutable fields. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Operator notification id (ObjectId)
   * @param {Object} opts.data - OperatorNotificationUpdateData (or {operatorNotification: ...})
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} 404 OPERATOR_NOTIFICATION_NOT_FOUND
   */
  function update({token, jwtToken, id, data, headers}) {
    return client({
      url: `/operator-notifications/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /operator-notifications/:id - hard delete. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Operator notification id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} DeletedOperatorNotificationResponse
   */
  function remove({token, jwtToken, id, headers}) {
    return client({
      url: `/operator-notifications/${id}`,
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

module.exports = operatorNotificationsFactory;
