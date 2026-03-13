/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /shifts (btrz-api-accounts). See get-shifts handler getSpec().
 * @typedef {Object} ShiftsListQuery
 * @property {string} [includeActivity] - 'true'|'false'; default 'true' (include sales activity)
 * @property {string} [status] - open | closed (ignored if pendingShiftClosure is true)
 * @property {string} [pendingShiftClosure] - 'true'|'false'; return shifts that need shift closure
 * @property {string} [locationId] - Filter by location (ObjectId)
 * @property {string} [providerId] - Provider for payments (ObjectId)
 * @property {string} [sort] - closedAsc | closedDesc | openedAsc
 * @property {string} [fromDate] - Start date (YYYY-MM-DD); requires toDate
 * @property {string} [toDate] - End date (YYYY-MM-DD); requires fromDate
 */

/**
 * Query params for GET /shifts/location-closures (btrz-api-accounts). See get-location-closures handler getSpec().
 * @typedef {Object} LocationClosuresListQuery
 * @property {string} [sort] - createdAsc | createdDesc | updatedAsc | updatedDesc
 * @property {number} [page] - Page number
 * @property {string} [fromDate] - Start date (YYYY-MM-DD); requires toDate
 * @property {string} [toDate] - End date (YYYY-MM-DD); requires fromDate
 */

/**
 * Query params for GET /shifts/:locationId/purchase-limit-payments (btrz-api-accounts). See getSpec().
 * @typedef {Object} PurchaseLimitPaymentsQuery
 * @property {string} day - Date of payments (YYYY-MM-DD). Required.
 */

/**
 * Query params for GET /shifts/:shiftId/sales-summary (btrz-api-accounts). See get-shift-sales-summary getSpec().
 * @typedef {Object} ShiftSalesSummaryQuery
 * @property {string} [type] - 'revenueOperatingCompany' to aggregate by revenue operating company
 * @property {boolean} [depositable] - Get only depositable payment types
 * @property {boolean} [paymentsAndRefundsDetails] - Include payments and refunds details per payment type and currency
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
   * GET /shifts - list shifts for the account. Returns shifts filtered by query params.
   * See get-shifts handler getSpec() in btrz-api-accounts for full API details.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ShiftsListQuery} [opts.query] - Query params (includeActivity, status, pendingShiftClosure, locationId, providerId, sort, fromDate, toDate)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ shifts: Array }>>} Response body: { shifts }. Errors: 400 (validation), 401, 500
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
   * GET /shift/user/:userId - get shift for user. API does not accept query params.
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
   * POST /shifts - open a shift for a user. Body: PostShiftRequest (stationId, userId, counterNumber).
   * See post-shift handler getSpec() in btrz-api-accounts for full API details.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.shiftData - Shift payload (stationId, userId, counterNumber)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ shift: Object }>>} Response body: { shift }. Errors: 400, 401, 404 (USER_NOT_FOUND, STATION_NOT_FOUND), 409 (SHIFT_ALREADY_OPEN_FOR_USER, USER_WITHOUT_SHIFT_ENABLED), 500
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
   * PATCH /shifts/:shiftId - close a shift. Body: PatchShiftRequest (operations array with comment).
   * See patch-shift handler getSpec() in btrz-api-accounts for full API details.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.shiftId - Shift id (ObjectId)
   * @param {Object} opts.operations - Operations payload (e.g. [{ comment }] for close)
   * @param {Object} [opts.headers] - Optional headers
   * @param {Object} [opts.query] - Optional query params
   * @returns {Promise<import("axios").AxiosResponse<{ shift: Object }>>} Response body: { shift }. Errors: 401, 404 (SHIFT_NOT_FOUND, USER_NOT_FOUND), 409 (SHIFT_ALREADY_CLOSED, COMMENT_IS_MANDATORY_WHEN_VARIANCE_EXISTS, TOTAL_CHANGED), 500
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
     * @param {ShiftsListQuery} [opts.query] - Query params
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
     * GET /shifts/location-closures/:locationClosureId - get a location closure. API does not accept query params.
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

  const vouchers = {
    /**
     * GET /shifts/:shiftId/vouchers - get vouchers for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/vouchers`, {
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
     * @param {PurchaseLimitPaymentsQuery} [opts.query] - Query params; day (YYYY-MM-DD) is required
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
     * @param {ShiftSalesSummaryQuery} [opts.query] - Query params (type, depositable, paymentsAndRefundsDetails)
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
    vouchers,
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
