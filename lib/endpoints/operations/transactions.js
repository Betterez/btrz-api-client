

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for transactions API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} transactions API methods
 */


function transactionsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /transactions/:trxId - get transaction by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.trxId - Transaction id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const trxId = _ref2.trxId;
    const query = _ref2.query;
    const headers = _ref2.headers;

    return client({
      url: `/transactions/${trxId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /transactions - list transactions. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const query = _ref3.query;
    const headers = _ref3.headers;

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
  function getTickets(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const trxId = _ref4.trxId;
    const headers = _ref4.headers;

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
  function appliedInsurance(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const trxId = _ref5.trxId;
    const headers = _ref5.headers;

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
  function companionTickets(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const transactionId = _ref6.transactionId;
    const ticketIds = _ref6.ticketIds;
    const headers = _ref6.headers;

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
   * @param {string} [opts.transactionId] - Transaction id
   * @param {boolean} [opts.allEligibleTransactions] - When true, omit transactionIds to let backend expire all eligible transactions
   * @param {boolean} [opts.avoidEmail] - Whether to avoid sending email
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function expireAll(_ref7) {
    const jwtToken = _ref7.jwtToken;
    const transactionId = _ref7.transactionId;
    const allEligibleTransactions = _ref7.allEligibleTransactions;
    const avoidEmail = _ref7.avoidEmail;
    const token = _ref7.token;
    const headers = _ref7.headers;

    const operation = {
      name: "expire_payment",
      avoidEmail,
      transactionIds: [transactionId]
    };

    if (allEligibleTransactions) {
      delete operation.transactionIds;
    }

    return client({
      url: "/transactions/status",
      method: "patch",
      params: {},
      headers: authorizationHeaders({internalAuthTokenProvider, jwtToken, token, headers}),
      data: {
        operation
      }
    });
  }

  /**
   * GET /transactions/:transactionId/cancellable-items - get cancellable items. Query: displayAll, channel (channel required per getSpec).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.transactionId - Transaction id
   * @param {Object} [opts.headers] - Optional headers
   * @param {boolean} [opts.displayAll] - Display all transaction items whether cancellable or not
   * @param {string} [opts.channel] - Channel (required per btrz-api-operations getSpec)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function cancellableItems(_ref8) {
    const token = _ref8.token;
    const jwtToken = _ref8.jwtToken;
    const transactionId = _ref8.transactionId;
    const headers = _ref8.headers;
    const displayAll = _ref8.displayAll;
    const channel = _ref8.channel;

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
    update: function update(_ref9) {
      const token = _ref9.token;
      const jwtToken = _ref9.jwtToken;
      const trxId = _ref9.trxId;
      const paymentResult = _ref9.paymentResult;
      const headers = _ref9.headers;

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
    create: function create(_ref10) {
      const token = _ref10.token;
      const jwtToken = _ref10.jwtToken;
      const transactionId = _ref10.transactionId;
      const query = _ref10.query;
      const invoice = _ref10.invoice;
      const headers = _ref10.headers;

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
     * POST /transactions/:transactionId/credit-notes - create credit note. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.transactionId - Transaction id
     * @param {Object} opts.creditNote - Credit note payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref11) {
      const token = _ref11.token;
      const jwtToken = _ref11.jwtToken;
      const transactionId = _ref11.transactionId;
      const query = _ref11.query;
      const creditNote = _ref11.creditNote;
      const headers = _ref11.headers;

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
  function updateDelivery(_ref12) {
    const token = _ref12.token;
    const jwtToken = _ref12.jwtToken;
    const trxId = _ref12.trxId;
    const data = _ref12.data;
    const headers = _ref12.headers;

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
