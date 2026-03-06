/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} ShiftsQuery
 * @property {string} [includeActivity] - Set to 'false' to avoid returning sales activity (default 'true')
 * @property {string} [status] - One of 'open' or 'closed'
 * @property {string} [pendingShiftClosure] - Return shifts that need to be added to a shift closure ('true'|'false')
 * @property {string} [locationId] - Filter shifts by location (ObjectId)
 * @property {string} [providerId] - Provider for payments (ObjectId)
 * @property {string} [sort] - Sort order: 'closedAsc'|'closedDesc'|'openedAsc'
 * @property {string} [fromDate] - Start date (YYYY-MM-DD)
 * @property {string} [toDate] - End date (YYYY-MM-DD)
 */

/**
 * Factory for shifts API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, requiresAgencyShiftClosure: object, payments: object, transactions: object, tickets: object, fees: object, refunds: object, items: object, redeemableItems: object, giftCertificates: object, parcels: object, insurances: object, invoices: object, deposits: object, manualTickets: object, locationClosures: object, startingBalances: object, purchaseLimitPayments: object, salesSummary: object, commissions: object }}
 */
function shiftsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /shifts - list shifts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ShiftsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({jwtToken, token, query, headers}) {
    return client.get("/shifts", {
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query
    });
  }

  /**
   * GET /shift/user/:userId - get shift for user.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.userId - User id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, userId, headers}) {
    return client.get(`/shift/user/${userId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /shifts - create a shift.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.shiftData - Shift payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, shiftData, headers}) {
    return client({
      url: "/shifts",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: shiftData
    });
  }

  /**
   * PATCH /shifts/:shiftId - update a shift (operations).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.shiftId - Shift id (ObjectId)
   * @param {Object} opts.operations - Operations payload
   * @param {ShiftsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, shiftId, operations, headers, query}) {
    return client({
      url: `/shifts/${shiftId}`,
      method: "patch",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        operations
      },
      params: query
    });
  }

  const locationClosureComments = {
    /**
     * POST /shifts/location-closures/:locationClosureId/comments - add comment to location closure.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.locationClosureId - Location closure id (ObjectId)
     * @param {Object} opts.locationClosureComment - Comment payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({jwtToken, token, locationClosureId, locationClosureComment, headers}) {
      return client({
        url: `/shifts/location-closures/${locationClosureId}/comments`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosureComment
      });
    }
  };

  const locationClosureStatus = {
    /**
     * PUT /shifts/location-closures/:locationClosureId/status - update location closure status.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.locationClosureId - Location closure id (ObjectId)
     * @param {Object} opts.locationClosureStatusChange - Status change payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({jwtToken, token, locationClosureId, locationClosureStatusChange, headers}) {
      return client({
        url: `/shifts/location-closures/${locationClosureId}/status`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosureStatusChange
      });
    }
  };

  const locationClosures = {
    /**
     * POST /shifts/location-closures - create a location closure.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.locationClosure - Location closure payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({jwtToken, token, locationClosure, headers}) {
      return client({
        url: "/shifts/location-closures",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosure
      });
    },
    /**
     * GET /shifts/location-closures - list location closures.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {ShiftsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({jwtToken, token, query, headers}) {
      return client.get("/shifts/location-closures", {
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    },
    /**
     * GET /shifts/location-closures/:locationClosureId - get a location closure.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.locationClosureId - Location closure id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, locationClosureId, headers}) {
      return client.get(`/shifts/location-closures/${locationClosureId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    comments: locationClosureComments,
    status: locationClosureStatus
  };

  const payments = {
    /**
     * GET /shifts/:shiftId/payments - get payments for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/payments`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const transactions = {
    /**
     * GET /shifts/:shiftId/transactions - get transactions for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/transactions`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const tickets = {
    /**
     * GET /shifts/:shiftId/tickets - get tickets for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/tickets`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const fees = {
    /**
     * GET /shifts/:shiftId/fees - get fees for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/fees`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const refunds = {
    /**
     * GET /shifts/:shiftId/refunds - get refunds for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/refunds`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const items = {
    /**
     * GET /shifts/:shiftId/items - get items for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/items`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const redeemableItems = {
    /**
     * GET /shifts/:shiftId/redeemable-items - get redeemable items for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/redeemable-items`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const giftCertificates = {
    /**
     * GET /shifts/:shiftId/gift-certificates - get gift certificates for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/gift-certificates`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const parcels = {
    /**
     * GET /shifts/:shiftId/parcels - get parcels for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/parcels`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const insurances = {
    /**
     * GET /shifts/:shiftId/insurances - get insurances for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/insurances`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const invoices = {
    /**
     * GET /shifts/:shiftId/invoices - get invoices for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/invoices`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const deposits = {
    /**
     * GET /shifts/:shiftId/deposits - get deposits for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/deposits`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /shifts/:shiftId/deposits - create a deposit for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} opts.deposit - Deposit payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({jwtToken, token, shiftId, deposit, headers}) {
      return client({
        url: `/shifts/${shiftId}/deposits`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: deposit
      });
    }
  };
  const manualTickets = {
    /**
     * GET /shifts/:shiftId/manual-tickets - get manual tickets for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/manual-tickets`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /shifts/:shiftId/manual-tickets - create a manual ticket for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} opts.manualTicket - Manual ticket payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({jwtToken, token, shiftId, manualTicket, headers}) {
      return client({
        url: `/shifts/${shiftId}/manual-tickets`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: manualTicket
      });
    }
  };
  const startingBalances = {
    /**
     * POST /shifts/:shiftId/starting-balance - create starting balance for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} opts.startingBalance - Starting balance payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({jwtToken, token, shiftId, startingBalance, headers}) {
      return client({
        url: `/shifts/${shiftId}/starting-balance`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: startingBalance
      });
    }
  };
  const purchaseLimitPayments = {
    /**
     * GET /shifts/:locationId/purchase-limit-payments - get purchase limit payments for location.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.locationId - Location id (ObjectId)
     * @param {ShiftsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, locationId, query, headers}) {
      return client.get(`/shifts/${locationId}/purchase-limit-payments`, {
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    }
  };
  const salesSummary = {
    /**
     * GET /shifts/:shiftId/sales-summary - get sales summary for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {ShiftsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, query, headers}) {
      return client.get(`/shifts/${shiftId}/sales-summary`, {
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    }
  };
  const commissions = {
    /**
     * GET /shifts/:shiftId/commissions - get commissions for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/commissions`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const requiresAgencyShiftClosure = {
    /**
     * PUT /shifts/:shiftId/requires-agency-shift-closure - set requires agency shift closure.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.shiftData] - Shift data payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    put({token, jwtToken, shiftId, headers, shiftData}) {
      return client({
        url: `/shifts/${shiftId}/requires-agency-shift-closure`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          shiftData
        }
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    requiresAgencyShiftClosure,
    payments,
    transactions,
    tickets,
    fees,
    refunds,
    items,
    redeemableItems,
    giftCertificates,
    parcels,
    insurances,
    invoices,
    deposits,
    manualTickets,
    locationClosures,
    startingBalances,
    purchaseLimitPayments,
    salesSummary,
    commissions
  };
}

module.exports = shiftsFactory;
