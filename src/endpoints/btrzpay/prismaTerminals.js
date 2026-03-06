const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * @typedef {Object} PrismaTerminalsQuery
 * @property {string} [providerId] - Account provider/operator ID for agencies/sellers
 * @property {boolean} [validateRefund] - (PUT refunds only) If true, fetch current state from Prisma before applying
 */

/**
 * Factory for Prisma terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, settlements: Object }}
 */
function prismaTerminalsFactory({client, internalAuthTokenProvider}) {
  const reversals = {
    /**
     * GET /prisma-terminals/reversals/:id - get reversal by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Reversal id
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, id, query = {}, headers}) {
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
     * @param {string} opts.id - Payment id
     * @param {Object} opts.prismaReversal - Prisma reversal payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, id, prismaReversal, query = {}, headers}) {
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
     * @param {string} opts.id - Reversal id
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete({token, jwtToken, id, query = {}, headers}) {
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
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, id, query = {}, headers}) {
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
     * @param {string} opts.id - Payment id
     * @param {Object} opts.prismaRefund - Prisma refund payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, id, prismaRefund, query = {}, headers}) {
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
     * @param {string} opts.id - Refund id
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete({token, jwtToken, id, query = {}, headers}) {
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
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, id, prismaRefund, query = {}, headers}) {
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
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, id, query = {}, headers}) {
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
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, prismaPayment, query = {}, headers}) {
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
     * @param {string} opts.id - Payment id
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete({token, jwtToken, id, query = {}, headers}) {
      return client({
        url: `/prisma-terminals/payments/${id}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    },
    /**
     * PUT /prisma-terminals/payments/:id - update payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Payment id
     * @param {Object} opts.prismaPayment - Prisma payment payload
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, id, prismaPayment, query = {}, headers}) {
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
     * @param {PrismaTerminalsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, settlement, query = {}, headers}) {
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
