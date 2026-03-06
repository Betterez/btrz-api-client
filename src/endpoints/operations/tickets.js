const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} TicketsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for tickets API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} tickets API methods
 */
function ticketsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /tickets/:id - get ticket by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @param {TicketsQuery} [opts.query] - Query params
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, headers, query}) {
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
  function patch({token, jwtToken, id, operations, warningsEnabled, headers}) {
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
  function companionTickets({token, jwtToken, ticketId, headers}) {
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
   * @param {TicketsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} [opts.providerId] - Provider id
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
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
  function updateDelivery({token, jwtToken, ticketId, data, headers}) {
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
  function updatePassenger({token, jwtToken, ticketId, data, headers}) {
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
