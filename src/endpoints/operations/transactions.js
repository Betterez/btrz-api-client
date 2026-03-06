/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} TransactionsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for transactions API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} transactions API methods
 */
function transactionsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /transactions/:trxId - get transaction by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.trxId - Transaction id
   * @param {TransactionsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, trxId, query, headers}) {
    return client({
      url: `/transactions/${trxId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /transactions - list transactions.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TransactionsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/transactions",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /transactions/:trxId/tickets - get transaction tickets.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.trxId - Transaction id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getTickets({token, jwtToken, trxId, headers}) {
    return client({
      url: `/transactions/${trxId}/tickets`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /transactions/:trxId/applied-insurance - get applied insurance.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.trxId - Transaction id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function appliedInsurance({token, jwtToken, trxId, headers}) {
    return client({
      url: `/transactions/${trxId}/applied-insurance`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /transactions/:transactionId/companion-tickets - get companion tickets.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.transactionId - Transaction id
   * @param {string[]} opts.ticketIds - Ticket ids
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function companionTickets({token, jwtToken, transactionId, ticketIds, headers}) {
    return client({
      url: `/transactions/${transactionId}/companion-tickets`,
      params: {
        ticketIds: ticketIds.join(",")
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PATCH /transactions/status (expire_payment) - expire transaction payment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.transactionId - Transaction id
   * @param {boolean} [opts.avoidEmail] - Whether to avoid sending email
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function expireAll({jwtToken, transactionId, avoidEmail, token, headers}) {
    return client({
      url: "/transactions/status",
      method: "patch",
      params: {},
      headers: authorizationHeaders({internalAuthTokenProvider, jwtToken, token, headers}),
      data: {
        operation: {
          name: "expire_payment",
          transactionIds: [transactionId],
          avoidEmail
        }
      }
    });
  }

  /**
   * GET /transactions/:transactionId/cancellable-items - get cancellable items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.transactionId - Transaction id
   * @param {Object} [opts.headers] - Optional headers
   * @param {boolean} [opts.displayAll] - Whether to display all items
   * @param {string} [opts.channel] - Channel
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function cancellableItems({token, jwtToken, transactionId, headers, displayAll, channel}) {
    return client({
      url: `/transactions/${transactionId}/cancellable-items`,
      params: {
        displayAll: !!displayAll,
        channel: channel || ""
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const payments = {
    /**
     * PUT /transactions/:trxId/payments - update payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.trxId - Transaction id
     * @param {Object} opts.paymentResult - Payment result payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, trxId, paymentResult, headers}) {
      return client({
        url: `/transactions/${trxId}/payments`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          paymentResult
        }
      });
    }
  };

  const invoices = {
    /**
     * POST /transactions/:transactionId/invoices - create invoice.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.transactionId - Transaction id
     * @param {TransactionsQuery} [opts.query] - Query params
     * @param {Object} opts.invoice - Invoice payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, transactionId, query, invoice, headers}) {
      return client({
        url: `/transactions/${transactionId}/invoices`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: invoice
      });
    }
  };

  const creditNotes = {
    /**
     * POST /transactions/:transactionId/credit-notes - create credit note.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.transactionId - Transaction id
     * @param {TransactionsQuery} [opts.query] - Query params
     * @param {Object} opts.creditNote - Credit note payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, transactionId, query, creditNote, headers}) {
      return client({
        url: `/transactions/${transactionId}/credit-notes`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: creditNote
      });
    }
  };

  /**
   * PUT /transactions/:trxId/delivery - update delivery.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.trxId - Transaction id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateDelivery({token, jwtToken, trxId, data, headers}) {
    return client({
      url: `/transactions/${trxId}/delivery`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    all,
    get,
    getTickets,
    appliedInsurance,
    companionTickets,
    expireAll,
    updateDelivery,
    cancellableItems,
    payments,
    invoices,
    creditNotes
  };
}

module.exports = transactionsFactory;
