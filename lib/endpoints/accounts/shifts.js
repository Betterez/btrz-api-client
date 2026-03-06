"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for shifts API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, requiresAgencyShiftClosure: object, payments: object, transactions: object, tickets: object, fees: object, refunds: object, items: object, redeemableItems: object, giftCertificates: object, parcels: object, insurances: object, invoices: object, deposits: object, manualTickets: object, locationClosures: object, startingBalances: object, purchaseLimitPayments: object, salesSummary: object, commissions: object }}
 */


function shiftsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /shifts - list shifts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        query = _ref2.query,
        headers = _ref2.headers;

    return client.get("/shifts", {
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
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
  function get(_ref3) {
    var token = _ref3.token,
        userId = _ref3.userId,
        headers = _ref3.headers;

    return client.get("/shift/user/" + userId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        shiftData = _ref4.shiftData,
        headers = _ref4.headers;

    return client({
      url: "/shifts",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
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
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        shiftId = _ref5.shiftId,
        operations = _ref5.operations,
        headers = _ref5.headers,
        query = _ref5.query;

    return client({
      url: "/shifts/" + shiftId,
      method: "patch",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        operations: operations
      },
      params: query
    });
  }

  var locationClosureComments = {
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
    create: function create(_ref6) {
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          locationClosureId = _ref6.locationClosureId,
          locationClosureComment = _ref6.locationClosureComment,
          headers = _ref6.headers;

      return client({
        url: "/shifts/location-closures/" + locationClosureId + "/comments",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: locationClosureComment
      });
    }
  };

  var locationClosureStatus = {
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
    update: function update(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          locationClosureId = _ref7.locationClosureId,
          locationClosureStatusChange = _ref7.locationClosureStatusChange,
          headers = _ref7.headers;

      return client({
        url: "/shifts/location-closures/" + locationClosureId + "/status",
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: locationClosureStatusChange
      });
    }
  };

  var locationClosures = {
    /**
     * POST /shifts/location-closures - create a location closure.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.locationClosure - Location closure payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref8) {
      var jwtToken = _ref8.jwtToken,
          token = _ref8.token,
          locationClosure = _ref8.locationClosure,
          headers = _ref8.headers;

      return client({
        url: "/shifts/location-closures",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: locationClosure
      });
    },

    /**
     * GET /shifts/location-closures - list location closures.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref9) {
      var jwtToken = _ref9.jwtToken,
          token = _ref9.token,
          query = _ref9.query,
          headers = _ref9.headers;

      return client.get("/shifts/location-closures", {
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
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
    get: function get(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          locationClosureId = _ref10.locationClosureId,
          headers = _ref10.headers;

      return client.get("/shifts/location-closures/" + locationClosureId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    comments: locationClosureComments,
    status: locationClosureStatus
  };

  var payments = {
    /**
     * GET /shifts/:shiftId/payments - get payments for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref11) {
      var token = _ref11.token,
          jwtToken = _ref11.jwtToken,
          shiftId = _ref11.shiftId,
          headers = _ref11.headers;

      return client.get("/shifts/" + shiftId + "/payments", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var transactions = {
    /**
     * GET /shifts/:shiftId/transactions - get transactions for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref12) {
      var token = _ref12.token,
          jwtToken = _ref12.jwtToken,
          shiftId = _ref12.shiftId,
          headers = _ref12.headers;

      return client.get("/shifts/" + shiftId + "/transactions", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var tickets = {
    /**
     * GET /shifts/:shiftId/tickets - get tickets for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref13) {
      var token = _ref13.token,
          jwtToken = _ref13.jwtToken,
          shiftId = _ref13.shiftId,
          headers = _ref13.headers;

      return client.get("/shifts/" + shiftId + "/tickets", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var fees = {
    /**
     * GET /shifts/:shiftId/fees - get fees for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref14) {
      var token = _ref14.token,
          jwtToken = _ref14.jwtToken,
          shiftId = _ref14.shiftId,
          headers = _ref14.headers;

      return client.get("/shifts/" + shiftId + "/fees", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var refunds = {
    /**
     * GET /shifts/:shiftId/refunds - get refunds for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref15) {
      var token = _ref15.token,
          jwtToken = _ref15.jwtToken,
          shiftId = _ref15.shiftId,
          headers = _ref15.headers;

      return client.get("/shifts/" + shiftId + "/refunds", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var items = {
    /**
     * GET /shifts/:shiftId/items - get items for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref16) {
      var token = _ref16.token,
          jwtToken = _ref16.jwtToken,
          shiftId = _ref16.shiftId,
          headers = _ref16.headers;

      return client.get("/shifts/" + shiftId + "/items", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var redeemableItems = {
    /**
     * GET /shifts/:shiftId/redeemable-items - get redeemable items for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref17) {
      var token = _ref17.token,
          jwtToken = _ref17.jwtToken,
          shiftId = _ref17.shiftId,
          headers = _ref17.headers;

      return client.get("/shifts/" + shiftId + "/redeemable-items", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var giftCertificates = {
    /**
     * GET /shifts/:shiftId/gift-certificates - get gift certificates for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref18) {
      var token = _ref18.token,
          jwtToken = _ref18.jwtToken,
          shiftId = _ref18.shiftId,
          headers = _ref18.headers;

      return client.get("/shifts/" + shiftId + "/gift-certificates", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var parcels = {
    /**
     * GET /shifts/:shiftId/parcels - get parcels for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref19) {
      var token = _ref19.token,
          jwtToken = _ref19.jwtToken,
          shiftId = _ref19.shiftId,
          headers = _ref19.headers;

      return client.get("/shifts/" + shiftId + "/parcels", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var insurances = {
    /**
     * GET /shifts/:shiftId/insurances - get insurances for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref20) {
      var token = _ref20.token,
          jwtToken = _ref20.jwtToken,
          shiftId = _ref20.shiftId,
          headers = _ref20.headers;

      return client.get("/shifts/" + shiftId + "/insurances", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var invoices = {
    /**
     * GET /shifts/:shiftId/invoices - get invoices for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref21) {
      var token = _ref21.token,
          jwtToken = _ref21.jwtToken,
          shiftId = _ref21.shiftId,
          headers = _ref21.headers;

      return client.get("/shifts/" + shiftId + "/invoices", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var deposits = {
    /**
     * GET /shifts/:shiftId/deposits - get deposits for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref22) {
      var token = _ref22.token,
          jwtToken = _ref22.jwtToken,
          shiftId = _ref22.shiftId,
          headers = _ref22.headers;

      return client.get("/shifts/" + shiftId + "/deposits", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    create: function create(_ref23) {
      var jwtToken = _ref23.jwtToken,
          token = _ref23.token,
          shiftId = _ref23.shiftId,
          deposit = _ref23.deposit,
          headers = _ref23.headers;

      return client({
        url: "/shifts/" + shiftId + "/deposits",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: deposit
      });
    }
  };
  var manualTickets = {
    /**
     * GET /shifts/:shiftId/manual-tickets - get manual tickets for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref24) {
      var token = _ref24.token,
          jwtToken = _ref24.jwtToken,
          shiftId = _ref24.shiftId,
          headers = _ref24.headers;

      return client.get("/shifts/" + shiftId + "/manual-tickets", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    create: function create(_ref25) {
      var jwtToken = _ref25.jwtToken,
          token = _ref25.token,
          shiftId = _ref25.shiftId,
          manualTicket = _ref25.manualTicket,
          headers = _ref25.headers;

      return client({
        url: "/shifts/" + shiftId + "/manual-tickets",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: manualTicket
      });
    }
  };
  var startingBalances = {
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
    create: function create(_ref26) {
      var jwtToken = _ref26.jwtToken,
          token = _ref26.token,
          shiftId = _ref26.shiftId,
          startingBalance = _ref26.startingBalance,
          headers = _ref26.headers;

      return client({
        url: "/shifts/" + shiftId + "/starting-balance",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: startingBalance
      });
    }
  };
  var purchaseLimitPayments = {
    /**
     * GET /shifts/:locationId/purchase-limit-payments - get purchase limit payments for location.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.locationId - Location id (ObjectId)
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref27) {
      var token = _ref27.token,
          jwtToken = _ref27.jwtToken,
          locationId = _ref27.locationId,
          query = _ref27.query,
          headers = _ref27.headers;

      return client.get("/shifts/" + locationId + "/purchase-limit-payments", {
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query
      });
    }
  };
  var salesSummary = {
    /**
     * GET /shifts/:shiftId/sales-summary - get sales summary for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref28) {
      var token = _ref28.token,
          jwtToken = _ref28.jwtToken,
          shiftId = _ref28.shiftId,
          query = _ref28.query,
          headers = _ref28.headers;

      return client.get("/shifts/" + shiftId + "/sales-summary", {
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query
      });
    }
  };
  var commissions = {
    /**
     * GET /shifts/:shiftId/commissions - get commissions for shift.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref29) {
      var token = _ref29.token,
          jwtToken = _ref29.jwtToken,
          shiftId = _ref29.shiftId,
          headers = _ref29.headers;

      return client.get("/shifts/" + shiftId + "/commissions", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var requiresAgencyShiftClosure = {
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
    put: function put(_ref30) {
      var token = _ref30.token,
          jwtToken = _ref30.jwtToken,
          shiftId = _ref30.shiftId,
          headers = _ref30.headers,
          shiftData = _ref30.shiftData;

      return client({
        url: "/shifts/" + shiftId + "/requires-agency-shift-closure",
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: {
          shiftData: shiftData
        }
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    requiresAgencyShiftClosure: requiresAgencyShiftClosure,
    payments: payments,
    transactions: transactions,
    tickets: tickets,
    fees: fees,
    refunds: refunds,
    items: items,
    redeemableItems: redeemableItems,
    giftCertificates: giftCertificates,
    parcels: parcels,
    insurances: insurances,
    invoices: invoices,
    deposits: deposits,
    manualTickets: manualTickets,
    locationClosures: locationClosures,
    startingBalances: startingBalances,
    purchaseLimitPayments: purchaseLimitPayments,
    salesSummary: salesSummary,
    commissions: commissions
  };
}

module.exports = shiftsFactory;