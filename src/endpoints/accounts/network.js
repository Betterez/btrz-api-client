/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for network API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ agencies: { all: function, get: function, update: function, create: function, removeProduct: function, removeFare: function } }}
 */
function networkFactory({client, internalAuthTokenProvider}) {
  const agencies = {
    /**
     * GET /network/agencies - list agencies.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/network/agencies",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * GET /network/agencies/:sellerId - get an agency by seller id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.sellerId - Seller/agency id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, query, headers, sellerId}) {
      return client({
        url: `/network/agencies/${sellerId}`,
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    },
    /**
     * PUT /network/agencies/:sellerId - update an agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.sellerId - Seller/agency id (ObjectId)
     * @param {Object} opts.agency - Agency payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({jwtToken, token, sellerId, agency, headers, query}) {
      return client({
        url: `/network/agencies/${sellerId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          agency
        },
        params: query
      });
    },
    /**
     * POST /network/agencies - create an agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.agency - Agency payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({jwtToken, token, agency, headers}) {
      return client({
        url: "/network/agencies",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          agency
        }
      });
    },
    /**
     * PUT /network/agencies/remove-product - remove product from agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.productId - Product id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    removeProduct({token, jwtToken, productId, headers}) {
      return client({
        url: "/network/agencies/remove-product",
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          productId
        }
      });
    },
    /**
     * PUT /network/agencies/remove-fare - remove fare from agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    removeFare({token, jwtToken, fareId, headers}) {
      return client({
        url: "/network/agencies/remove-fare",
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareId
        }
      });
    }
  };

  return {
    agencies
  };
}

module.exports = networkFactory;
