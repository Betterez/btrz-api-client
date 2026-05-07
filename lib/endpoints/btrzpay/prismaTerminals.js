

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for Prisma terminals endpoints (btrz-api-payments).
 * @typedef {Object} PrismaTerminalsQuery
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers
 * @property {boolean} [validateRefund] - (PUT refunds only) If true, fetch current state from Prisma before applying
 * @property {boolean} [validatePayment] - (PUT payments only) If true, validate payment against the provider
 */

/**
 * Factory for Prisma terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, settlements: Object }}
 */


function prismaTerminalsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  const reversals = {
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
      const token = _ref2.token;
      const jwtToken = _ref2.jwtToken;
      const id = _ref2.id;
      const _ref2$query = _ref2.query;
      const query = _ref2$query === undefined ? {} : _ref2$query;
      const headers = _ref2.headers;

      return client.get(`/prisma-terminals/reversals/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * POST /prisma-terminals/payments/:id/reversals - create reversal.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id (prismaPaymentId)
     * @param {Object} opts.prismaReversal - Prisma reversal payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref3) {
      const token = _ref3.token;
      const jwtToken = _ref3.jwtToken;
      const id = _ref3.id;
      const prismaReversal = _ref3.prismaReversal;
      const _ref3$query = _ref3.query;
      const query = _ref3$query === undefined ? {} : _ref3$query;
      const headers = _ref3.headers;

      return client({
        url: `/prisma-terminals/payments/${id}/reversals`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {prismaReversal}
      });
    },

    /**
     * DELETE /prisma-terminals/reversals/:id - delete reversal.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Reversal id (prismaPaymentId)
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref4) {
      const token = _ref4.token;
      const jwtToken = _ref4.jwtToken;
      const id = _ref4.id;
      const _ref4$query = _ref4.query;
      const query = _ref4$query === undefined ? {} : _ref4$query;
      const headers = _ref4.headers;

      return client({
        url: `/prisma-terminals/reversals/${id}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    }
  };

  const refunds = {
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
      const token = _ref5.token;
      const jwtToken = _ref5.jwtToken;
      const id = _ref5.id;
      const _ref5$query = _ref5.query;
      const query = _ref5$query === undefined ? {} : _ref5$query;
      const headers = _ref5.headers;

      return client.get(`/prisma-terminals/refunds/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * POST /prisma-terminals/payments/:id/refunds - create refund.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id (prismaPaymentId)
     * @param {Object} opts.prismaRefund - Prisma refund payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref6) {
      const token = _ref6.token;
      const jwtToken = _ref6.jwtToken;
      const id = _ref6.id;
      const prismaRefund = _ref6.prismaRefund;
      const _ref6$query = _ref6.query;
      const query = _ref6$query === undefined ? {} : _ref6$query;
      const headers = _ref6.headers;

      return client({
        url: `/prisma-terminals/payments/${id}/refunds`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {prismaRefund}
      });
    },

    /**
     * DELETE /prisma-terminals/refunds/:id - delete refund.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Refund id (prismaPaymentId)
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref7) {
      const token = _ref7.token;
      const jwtToken = _ref7.jwtToken;
      const id = _ref7.id;
      const _ref7$query = _ref7.query;
      const query = _ref7$query === undefined ? {} : _ref7$query;
      const headers = _ref7.headers;

      return client({
        url: `/prisma-terminals/refunds/${id}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
      const token = _ref8.token;
      const jwtToken = _ref8.jwtToken;
      const id = _ref8.id;
      const prismaRefund = _ref8.prismaRefund;
      const _ref8$query = _ref8.query;
      const query = _ref8$query === undefined ? {} : _ref8$query;
      const headers = _ref8.headers;

      return client({
        url: `/prisma-terminals/refunds/${id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {prismaRefund}
      });
    }
  };

  const payments = {
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
      const token = _ref9.token;
      const jwtToken = _ref9.jwtToken;
      const id = _ref9.id;
      const _ref9$query = _ref9.query;
      const query = _ref9$query === undefined ? {} : _ref9$query;
      const headers = _ref9.headers;

      return client.get(`/prisma-terminals/payments/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * POST /prisma-terminals/payments - create payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.prismaPayment - Prisma payment payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref10) {
      const token = _ref10.token;
      const jwtToken = _ref10.jwtToken;
      const prismaPayment = _ref10.prismaPayment;
      const _ref10$query = _ref10.query;
      const query = _ref10$query === undefined ? {} : _ref10$query;
      const headers = _ref10.headers;

      return client({
        url: "/prisma-terminals/payments",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {prismaPayment}
      });
    },

    /**
     * DELETE /prisma-terminals/payments/:id - delete payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id (prismaPaymentId)
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref11) {
      const token = _ref11.token;
      const jwtToken = _ref11.jwtToken;
      const id = _ref11.id;
      const _ref11$query = _ref11.query;
      const query = _ref11$query === undefined ? {} : _ref11$query;
      const headers = _ref11.headers;

      return client({
        url: `/prisma-terminals/payments/${id}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    },

    /**
     * PUT /prisma-terminals/payments/:id - update payment (hidden in API docs).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id (prismaPaymentId)
     * @param {Object} opts.prismaPayment - Prisma payment payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId, validatePayment)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref12) {
      const token = _ref12.token;
      const jwtToken = _ref12.jwtToken;
      const id = _ref12.id;
      const prismaPayment = _ref12.prismaPayment;
      const _ref12$query = _ref12.query;
      const query = _ref12$query === undefined ? {} : _ref12$query;
      const headers = _ref12.headers;

      return client({
        url: `/prisma-terminals/payments/${id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {prismaPayment}
      });
    },

    reversals,
    refunds
  };

  const settlements = {
    /**
     * POST /prisma-terminals/settlements - create settlement.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.settlement - Settlement payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref13) {
      const token = _ref13.token;
      const jwtToken = _ref13.jwtToken;
      const settlement = _ref13.settlement;
      const _ref13$query = _ref13.query;
      const query = _ref13$query === undefined ? {} : _ref13$query;
      const headers = _ref13.headers;

      return client({
        url: "/prisma-terminals/settlements",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {settlement}
      });
    }
  };

  return {
    payments,
    settlements
  };
}

module.exports = prismaTerminalsFactory;
