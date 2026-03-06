/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} CartQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for cart API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, add: function, deleteItems: function, deletePaidInItem: function, deletePaidInItems: function, loyaltyPointsAmount: Object, patch: function, partialDepositStatus: Object, payments: Object, taxExemptPaymentMethod: Object, financingCosts: Object }}
 */
function cartFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /cart/:id - get cart by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.id - Cart id
   * @param {string} [opts.providerId] - Provider id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, id, providerId, headers}) {
    let url = `/cart/${id}`;

    if (providerId) {
      url = `${url}?providerId=${providerId}`;
    }

    return client({
      url,
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
  function create({token, cart, jwtToken, headers}) {
    return client({
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  /**
   * POST /cart/:cartId/items - add items to cart.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.cartId - Cart id
   * @param {Object} opts.cart - Cart items payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function add({token, cartId, cart, jwtToken, headers}) {
    return client({
      url: `/cart/${cartId}/items`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  /**
   * DELETE /cart/:cartId/items - delete items from cart.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.cartId - Cart id
   * @param {Object} opts.params - Query params (forwarded to API)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteItems({token, cartId, params, jwtToken, headers}) {
    return client({
      url: `/cart/${cartId}/items`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  /**
   * DELETE /carts/:cartId/paid-in-items/:itemId - delete paid-in item.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.cartId - Cart id
   * @param {string} opts.itemId - Item id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deletePaidInItem({token, cartId, itemId, jwtToken, headers}) {
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
   * @param {Object} opts.params - Query params (forwarded to API)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deletePaidInItems({token, cartId, params, jwtToken, headers}) {
    return client({
      url: `/carts/${cartId}/paid-in-items`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  const loyaltyPointsAmount = {
    /**
     * GET /carts/:cartId/loyalty-points-amount - get loyalty points amount for cart.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.cartId - Cart id
     * @param {CartQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, cartId, query = {}, headers}) {
      return client({
        url: `/carts/${cartId}/loyalty-points-amount`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };


  /**
   * PATCH /cart/:cartId - patch cart.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.cartId - Cart id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch({token, jwtToken, cartId, data, headers}) {
    return client({
      url: `/cart/${cartId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  const partialDepositStatus = {
    /**
     * GET /cart/:shiftId/partial-deposit-status - get partial deposit status.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.shiftId - Shift id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/cart/${shiftId}/partial-deposit-status`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const payments = {
    /**
     * DELETE /carts/:cartId/payments - delete cart payments.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.cartId - Cart id
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete({token, cartId, jwtToken, headers}) {
      return client({
        url: `/carts/${cartId}/payments`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * PUT /carts/:cartId/payments - put cart payments.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.cartId - Cart id
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.payment - Payment payload
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    put({token, cartId, jwtToken, headers, payment}) {
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
     * POST /carts/:cartId/tax-exempt-payment-method - set tax exempt payment method.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.cartId - Cart id
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} [opts.data] - Request body
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    post({token, cartId, jwtToken, headers, data = {}}) {
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
     * @param {CartQuery} [opts.query] - Query params
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, headers, cartId, financingCost, query = {}}) {
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
     * @param {CartQuery} [opts.query] - Query params
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete({token, jwtToken, headers, cartId, query = {}}) {
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
