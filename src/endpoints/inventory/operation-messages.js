const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /operation-messages (btrz-api-inventory). See get-operation-messages getSpec().
 * @typedef {Object} OperationMessagesListQuery
 * @property {string} [providerId] - Provider id to get operation messages for
 * @property {number} [page] - Page number (default 1)
 * @property {string} [name] - Full or partial name (non case sensitive)
 * @property {string} [type] - Operation message type
 * @property {string} [stationId] - Station id of the operation message
 * @property {string} [avoidPagination] - Any value = true to avoid pagination
 * @property {string} [active] - Filter active/inactive [true, false]
 * @property {string} [effectiveDateTimeStartBefore] - ISO datetime (start before/at)
 * @property {string} [effectiveDateTimeEndAfter] - ISO datetime (end after/at)
 */

/**
 * Factory for operation-messages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function, getByStation: function }}
 */
function operationMessagesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /operation-messages - list operation messages.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {OperationMessagesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationMessages: Object[], count?: number, next?: string, previous?: string }>>}
   * @throws When the request fails (e.g. 401 Unauthorized, 500 Internal Server Error)
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/operation-messages",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /operation-messages - create operation message. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.opMsgData - Operation message payload (message, name, type, effectiveDateTimeStart/End, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Created OperationMessage
   * @throws When the request fails (400, 401, 409 duplicate key, 500)
   */
  function create({token, jwtToken, opMsgData, headers}) {
    return client({
      url: "/operation-messages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: opMsgData
    });
  }

  /**
   * PUT /operation-messages/:operationMessageId - update operation message. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id (24-char hex ObjectId)
   * @param {Object} opts.opMsgData - Operation message payload (message, name, type, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Updated OperationMessage
   * @throws When the request fails (400, 401, 404 NOT_FOUND, 500)
   */
  function update({token, jwtToken, operationMessageId, opMsgData, headers}) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: opMsgData
    });
  }

  /**
   * GET /operation-messages/:operationMessageId - get operation message by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.operationMessageId - Operation message id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Response body is the OperationMessage
   * @throws When the request fails (e.g. 401 Unauthorized, 404 NOT_FOUND, 500 Internal Server Error)
   */
  function get({token, operationMessageId, headers}) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /operation-messages/:operationMessageId - remove operation message. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id (24-char hex ObjectId)
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<void>>} 204 No Content on success
   * @throws When the request fails (e.g. 401 Unauthorized, 404 NOT_FOUND, 500 Internal Server Error)
   */
  function remove({jwtToken, operationMessageId, token, headers}) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /operation-messages-stations - get operation messages by station (complex JSON payload).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.opMsgData - Request body (OperationMessagesStationsQuery: station criteria and dates)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Response body matches OperationMessagesStations schema
   * @throws When the request fails (e.g. 400 INVALID_DATE_RANGE/INVALID_STATION, 401, 500)
   */
  function getByStation({token, jwtToken, opMsgData, headers}) {
    return client({
      url: "/operation-messages-stations",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: opMsgData
    });
  }

  return {
    get,
    all,
    create,
    update,
    remove,
    getByStation
  };
}

module.exports = operationMessagesFactory;
