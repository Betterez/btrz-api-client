function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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
function ticketsFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /tickets/:id - get ticket by id. API does not accept query params (btrz-api-operations).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    token,
    jwtToken,
    id,
    headers,
    query
  }) {
    return client({
      url: `/tickets/${id}`,
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function patch({
    token,
    jwtToken,
    id,
    operations,
    warningsEnabled,
    headers
  }) {
    return client({
      url: `/tickets/${id}`,
      method: "patch",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        operations,
        warningsEnabled
      }
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
  function companionTickets({
    token,
    jwtToken,
    ticketId,
    headers
  }) {
    return client({
      url: `/tickets/${ticketId}/companion-tickets`,
      headers: authorizationHeaders({
        token,
        jwtToken,
        headers
      })
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
  function all({
    token,
    jwtToken,
    query = {},
    headers,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: "/tickets",
      params: query_,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function updateDelivery({
    token,
    jwtToken,
    ticketId,
    data,
    headers
  }) {
    return client({
      url: `/tickets/${ticketId}/delivery`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
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
  function updatePassenger({
    token,
    jwtToken,
    ticketId,
    data,
    headers
  }) {
    return client({
      url: `/tickets/${ticketId}/passenger`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
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