/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /network/agencies (btrz-api-accounts). See get-agencies-handler getSpec().
 * @typedef {Object} NetworkAgenciesListQuery
 * @property {string} [name] - Filter by agency/seller name (prefix, case-insensitive)
 * @property {number} [page] - Page number (1-based)
 */

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
     * GET /network/agencies - list agencies (paginated). Query: name, page.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {NetworkAgenciesListQuery} [opts.query] - Query params (name, page)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ agencies: Array, next?: string, previous?: string, count?: number }>>}
     *   Errors: 401, 500
     */
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/network/agencies",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * GET /network/agencies/:agencyId - get an agency by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.sellerId - Seller/agency id (ObjectId), path param agencyId
     * @param {Object} [opts.query] - Optional query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ agency: Object }>>}
     *   Errors: 400 (INVALID_AGENCY_ID), 401, 404 (AGENCY_NOT_FOUND), 500
     */
    get({token, jwtToken, query, headers, sellerId}) {
      return client({
        url: `/network/agencies/${sellerId}`,
        params: query || {},
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * PUT /network/agencies/:sellerId - update an agency. API does not accept query params.
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
     * PUT /network/agencies/remove-product - remove productId from all agencies for the account.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.productId - Product id (non-empty string)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{}>>}
     *   Errors: 400 (WRONG_DATA), 401, 500
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
     * PUT /network/agencies/remove-fare - remove fareId from all agencies for the account.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id (non-empty string)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{}>>}
     *   Errors: 400 (WRONG_DATA), 401, 500
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
