const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for operation-messages endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryOperationMessagesQuery
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
   * @param {InventoryOperationMessagesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * POST /operation-messages - create operation message.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.opMsgData - Operation message payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * PUT /operation-messages/:operationMessageId - update operation message.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id
   * @param {Object} opts.opMsgData - Operation message payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * GET /operation-messages/:operationMessageId - get operation message by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.operationMessageId - Operation message id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, operationMessageId, headers}) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /operation-messages/:operationMessageId - remove operation message.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * @param {Object} opts.opMsgData - Request body (station criteria)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
