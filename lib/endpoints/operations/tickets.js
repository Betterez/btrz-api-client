

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /tickets list (btrz-api-operations). providerId merged when opts.providerId set.
 * @typedef {Object} TicketsListQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for tickets API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} tickets API methods
 */


function ticketsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /tickets/:id - get ticket by id. API does not accept query params (btrz-api-operations).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const id = _ref2.id;
    const headers = _ref2.headers;
    const query = _ref2.query;

    return client({
      url: `/tickets/${id}`,
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PATCH /tickets/:id - patch ticket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Ticket id
   * @param {Object} opts.operations - JSON Patch operations
   * @param {boolean} [opts.warningsEnabled] - Whether to enable warnings
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const operations = _ref3.operations;
    const warningsEnabled = _ref3.warningsEnabled;
    const headers = _ref3.headers;

    return client({
      url: `/tickets/${id}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operations, warningsEnabled}
    });
  }

  /**
   * GET /tickets/:ticketId/companion-tickets - get companion tickets.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function companionTickets(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const ticketId = _ref4.ticketId;
    const headers = _ref4.headers;

    return client({
      url: `/tickets/${ticketId}/companion-tickets`,
      headers: authorizationHeaders({token, jwtToken, headers})
    });
  }

  /**
   * GET /tickets - list tickets.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TicketsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} [opts.providerId] - Provider id
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const _ref5$query = _ref5.query;
    const query = _ref5$query === undefined ? {} : _ref5$query;
    const headers = _ref5.headers;
    const providerId = _ref5.providerId;

    const query_ = providerId ? _extends({}, query, {providerId}) : query;
    return client({
      url: "/tickets",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /tickets/:ticketId/delivery - update ticket delivery.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateDelivery(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const ticketId = _ref6.ticketId;
    const data = _ref6.data;
    const headers = _ref6.headers;

    return client({
      url: `/tickets/${ticketId}/delivery`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /tickets/:ticketId/passenger - update ticket passenger.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updatePassenger(_ref7) {
    const token = _ref7.token;
    const jwtToken = _ref7.jwtToken;
    const ticketId = _ref7.ticketId;
    const data = _ref7.data;
    const headers = _ref7.headers;

    return client({
      url: `/tickets/${ticketId}/passenger`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    get,
    all,
    patch,
    companionTickets,
    updateDelivery,
    updatePassenger
  };
}

module.exports = ticketsFactory;
