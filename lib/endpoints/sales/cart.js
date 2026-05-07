

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /cart/:cartId (btrz-api-sales get-cart getSpec).
 * @typedef {Object} CartGetQuery
 * @property {string} [providerId] - Provider account id
 * @property {string} [transactionStatus] - Filter: 'created' or 'waiting_for_payment'
 */

/**
 * Query params for POST /carts/:cartId/financing-costs (btrz-api-sales post-financingcost-handler getSpec).
 * @typedef {Object} CartFinancingCostsCreateQuery
 * @property {string} [providerId] - Provider id to get financing costs for
 */

/**
 * Query params for DELETE /carts/:cartId/financing-costs (btrz-api-sales delete-financingcost-handler getSpec).
 * @typedef {Object} CartFinancingCostsDeleteQuery
 * @property {string} [internalId] - Internal id or code of the financing cost to match
 */

/**
 * Query params for DELETE /carts/:cartId/paid-in-items (btrz-api-sales delete-cart-paid-in-items-handler getSpec).
 * @typedef {Object} CartDeletePaidInItemsQuery
 * @property {string} [operationId] - Optional operation id to filter which paid-in items to remove
 * @property {string} [productId] - Optional product id to filter which paid-in items to remove
 */

/**
 * Factory for cart API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, add: function, deleteItems: function, deletePaidInItem: function, deletePaidInItems: function, loyaltyPointsAmount: Object, patch: function, partialDepositStatus: Object, payments: Object, taxExemptPaymentMethod: Object, financingCosts: Object }}
 */


function cartFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /cart/:id - get cart by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.id - Cart id
   * @param {CartGetQuery} [opts.query] - Query params (providerId, transactionStatus)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const id = _ref2.id;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: `/cart/${id}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /cart - create cart.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.cart - Cart payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const cart = _ref3.cart;
    const jwtToken = _ref3.jwtToken;
    const headers = _ref3.headers;

    return client({
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  /**
   * POST /cart/:cartId/items - add items to cart. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.cartId - Cart id
   * @param {Object} opts.cart - Cart items payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function add(_ref4) {
    const token = _ref4.token;
    const cartId = _ref4.cartId;
    const cart = _ref4.cart;
    const jwtToken = _ref4.jwtToken;
    const headers = _ref4.headers;

    return client({
      url: `/cart/${cartId}/items`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  /**
   * DELETE /cart/:cartId/items - delete items from cart. Query forwarded via opts.params if provided.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.cartId - Cart id
   * @param {Object} opts.params - Query params (forwarded to API)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteItems(_ref5) {
    const token = _ref5.token;
    const cartId = _ref5.cartId;
    const params = _ref5.params;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

    return client({
      url: `/cart/${cartId}/items`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  /**
   * DELETE /carts/:cartId/paid-in-items/:itemId - delete paid-in item. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.cartId - Cart id
   * @param {string} opts.itemId - Item id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deletePaidInItem(_ref6) {
    const token = _ref6.token;
    const cartId = _ref6.cartId;
    const itemId = _ref6.itemId;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;

    return client({
      url: `/carts/${cartId}/paid-in-items/${itemId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /carts/:cartId/paid-in-items - delete paid-in items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.cartId - Cart id
   * @param {CartDeletePaidInItemsQuery} [opts.params] - Query params (operationId, productId)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deletePaidInItems(_ref7) {
    const token = _ref7.token;
    const cartId = _ref7.cartId;
    const params = _ref7.params;
    const jwtToken = _ref7.jwtToken;
    const headers = _ref7.headers;

    return client({
      url: `/carts/${cartId}/paid-in-items`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: params || {}
    });
  }

  const loyaltyPointsAmount = {
    /**
     * GET /carts/:cartId/loyalty-points-amount - get loyalty points amount for cart. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.cartId - Cart id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref8) {
      const token = _ref8.token;
      const jwtToken = _ref8.jwtToken;
      const cartId = _ref8.cartId;
      const _ref8$query = _ref8.query;
      const query = _ref8$query === undefined ? {} : _ref8$query;
      const headers = _ref8.headers;

      return client({
        url: `/carts/${cartId}/loyalty-points-amount`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  /**
   * PATCH /cart/:cartId - patch cart. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.cartId - Cart id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref9) {
    const token = _ref9.token;
    const jwtToken = _ref9.jwtToken;
    const cartId = _ref9.cartId;
    const data = _ref9.data;
    const headers = _ref9.headers;

    return client({
      url: `/cart/${cartId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  const partialDepositStatus = {
    /**
     * GET /cart/:shiftId/partial-deposit-status - get shift partial deposit status. API does not accept query params. Response: partialDeposit.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id (24 hex characters)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ partialDeposit: * }>>}
     */
    get: function get(_ref10) {
      const token = _ref10.token;
      const jwtToken = _ref10.jwtToken;
      const shiftId = _ref10.shiftId;
      const headers = _ref10.headers;

      return client.get(`/cart/${shiftId}/partial-deposit-status`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const payments = {
    /**
     * DELETE /carts/:cartId/payments - delete cart payments. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.cartId - Cart id
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref11) {
      const token = _ref11.token;
      const cartId = _ref11.cartId;
      const jwtToken = _ref11.jwtToken;
      const headers = _ref11.headers;

      return client({
        url: `/carts/${cartId}/payments`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * PUT /carts/:cartId/payments - put cart payments. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.cartId - Cart id
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.payment - Payment payload
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    put: function put(_ref12) {
      const token = _ref12.token;
      const cartId = _ref12.cartId;
      const jwtToken = _ref12.jwtToken;
      const headers = _ref12.headers;
      const payment = _ref12.payment;

      return client({
        url: `/carts/${cartId}/payments`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: payment
      });
    }
  };

  const taxExemptPaymentMethod = {
    /**
     * POST /carts/:cartId/tax-exempt-payment-method - recalculate taxes for a tax exempt payment method. Body: amountExempt (number).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.cartId - Cart id
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.data - Request body; must include amountExempt (number, amount exempted of taxes)
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    post: function post(_ref13) {
      const token = _ref13.token;
      const cartId = _ref13.cartId;
      const jwtToken = _ref13.jwtToken;
      const headers = _ref13.headers;
      const _ref13$data = _ref13.data;
      const data = _ref13$data === undefined ? {} : _ref13$data;

      return client({
        url: `/carts/${cartId}/tax-exempt-payment-method`,
        method: "POST",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  const financingCosts = {
    /**
     * POST /carts/:cartId/financing-costs - create financing cost.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.cartId - Cart id
     * @param {Object} opts.financingCost - Financing cost payload
     * @param {CartFinancingCostsCreateQuery} [opts.query] - Query params (providerId)
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref14) {
      const token = _ref14.token;
      const jwtToken = _ref14.jwtToken;
      const headers = _ref14.headers;
      const cartId = _ref14.cartId;
      const financingCost = _ref14.financingCost;
      const _ref14$query = _ref14.query;
      const query = _ref14$query === undefined ? {} : _ref14$query;

      return client({
        url: `/carts/${cartId}/financing-costs`,
        method: "POST",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          financingcost: financingCost
        }
      });
    },

    /**
     * DELETE /carts/:cartId/financing-costs - delete financing cost.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.cartId - Cart id
     * @param {CartFinancingCostsDeleteQuery} [opts.query] - Query params (internalId)
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: function _delete(_ref15) {
      const token = _ref15.token;
      const jwtToken = _ref15.jwtToken;
      const headers = _ref15.headers;
      const cartId = _ref15.cartId;
      const _ref15$query = _ref15.query;
      const query = _ref15$query === undefined ? {} : _ref15$query;

      return client({
        url: `/carts/${cartId}/financing-costs`,
        method: "delete",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    get,
    create,
    add,
    deleteItems,
    deletePaidInItem,
    deletePaidInItems,
    loyaltyPointsAmount,
    patch,
    partialDepositStatus,
    payments,
    taxExemptPaymentMethod,
    financingCosts
  };
}

module.exports = cartFactory;
