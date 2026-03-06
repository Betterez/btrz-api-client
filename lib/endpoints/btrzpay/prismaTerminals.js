"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET payment/reversal/refund and PUT refund (btrz-api-payments). See get-by-id-* and put-refunds getSpec().
 * @typedef {Object} PrismaTerminalsQuery
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers
 * @property {boolean} [validateRefund] - (PUT refunds only) If true, fetch current state from Prisma before applying
 */

/**
 * Factory for Prisma terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, settlements: Object }}
 */


function prismaTerminalsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var reversals = {
    /**
     * GET /prisma-terminals/reversals/:id - get reversal by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Reversal id
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          id = _ref2.id,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client.get("/prisma-terminals/reversals/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /prisma-terminals/payments/:id/reversals - create reversal. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id
     * @param {Object} opts.prismaReversal - Prisma reversal payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          id = _ref3.id,
          prismaReversal = _ref3.prismaReversal,
          _ref3$query = _ref3.query,
          query = _ref3$query === undefined ? {} : _ref3$query,
          headers = _ref3.headers;

      return client({
        url: "/prisma-terminals/payments/" + id + "/reversals",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaReversal: prismaReversal }
      });
    },

    /**
     * DELETE /prisma-terminals/reversals/:id - delete reversal. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Reversal id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          id = _ref4.id,
          _ref4$query = _ref4.query,
          query = _ref4$query === undefined ? {} : _ref4$query,
          headers = _ref4.headers;

      return client({
        url: "/prisma-terminals/reversals/" + id,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    }
  };

  var refunds = {
    /**
     * GET /prisma-terminals/refunds/:id - get refund by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Refund id
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          id = _ref5.id,
          _ref5$query = _ref5.query,
          query = _ref5$query === undefined ? {} : _ref5$query,
          headers = _ref5.headers;

      return client.get("/prisma-terminals/refunds/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /prisma-terminals/payments/:id/refunds - create refund. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id
     * @param {Object} opts.prismaRefund - Prisma refund payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          id = _ref6.id,
          prismaRefund = _ref6.prismaRefund,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query,
          headers = _ref6.headers;

      return client({
        url: "/prisma-terminals/payments/" + id + "/refunds",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaRefund: prismaRefund }
      });
    },

    /**
     * DELETE /prisma-terminals/refunds/:id - delete refund. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Refund id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          id = _ref7.id,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          headers = _ref7.headers;

      return client({
        url: "/prisma-terminals/refunds/" + id,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    },

    /**
     * PUT /prisma-terminals/refunds/:id - update refund.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Refund id
     * @param {Object} opts.prismaRefund - Prisma refund payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId, validateRefund)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          id = _ref8.id,
          prismaRefund = _ref8.prismaRefund,
          _ref8$query = _ref8.query,
          query = _ref8$query === undefined ? {} : _ref8$query,
          headers = _ref8.headers;

      return client({
        url: "/prisma-terminals/refunds/" + id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaRefund: prismaRefund }
      });
    }
  };

  var payments = {
    /**
     * GET /prisma-terminals/payments/:id - get payment by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          id = _ref9.id,
          _ref9$query = _ref9.query,
          query = _ref9$query === undefined ? {} : _ref9$query,
          headers = _ref9.headers;

      return client.get("/prisma-terminals/payments/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /prisma-terminals/payments - create payment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.prismaPayment - Prisma payment payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          prismaPayment = _ref10.prismaPayment,
          _ref10$query = _ref10.query,
          query = _ref10$query === undefined ? {} : _ref10$query,
          headers = _ref10.headers;

      return client({
        url: "/prisma-terminals/payments",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaPayment: prismaPayment }
      });
    },

    /**
     * DELETE /prisma-terminals/payments/:id - delete payment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref11) {
      var token = _ref11.token,
          jwtToken = _ref11.jwtToken,
          id = _ref11.id,
          _ref11$query = _ref11.query,
          query = _ref11$query === undefined ? {} : _ref11$query,
          headers = _ref11.headers;

      return client({
        url: "/prisma-terminals/payments/" + id,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    },

    /**
     * PUT /prisma-terminals/payments/:id - update payment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id
     * @param {Object} opts.prismaPayment - Prisma payment payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref12) {
      var token = _ref12.token,
          jwtToken = _ref12.jwtToken,
          id = _ref12.id,
          prismaPayment = _ref12.prismaPayment,
          _ref12$query = _ref12.query,
          query = _ref12$query === undefined ? {} : _ref12$query,
          headers = _ref12.headers;

      return client({
        url: "/prisma-terminals/payments/" + id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaPayment: prismaPayment }
      });
    },

    reversals: reversals,
    refunds: refunds
  };

  var settlements = {
    /**
     * POST /prisma-terminals/settlements - create settlement. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.settlement - Settlement payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref13) {
      var token = _ref13.token,
          jwtToken = _ref13.jwtToken,
          settlement = _ref13.settlement,
          _ref13$query = _ref13.query,
          query = _ref13$query === undefined ? {} : _ref13$query,
          headers = _ref13.headers;

      return client({
        url: "/prisma-terminals/settlements",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { settlement: settlement }
      });
    }
  };

  return {
    payments: payments,
    settlements: settlements
  };
}

module.exports = prismaTerminalsFactory;