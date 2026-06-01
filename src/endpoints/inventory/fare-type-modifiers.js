const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /fare-type-modifiers (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} FareTypeModifiersListQuery
 */

/**
 * Factory for fare-type-modifiers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function fareTypeModifierFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /fare-type-modifiers - list fare-type modifiers (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {FareTypeModifiersListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifiers: Object[], next?: string, previous?: string, count: number }>>}
   * @throws
   * - 401 Unauthorized
   * - 500 Internal server error
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/fare-type-modifiers", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /fare-type-modifiers/:fareTypeModifierId - get fare-type modifier by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.fareTypeModifierId - Fare-type modifier id (24 hex characters)
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifier: Object }>>}
   * @throws
   * - 400 WRONG_DATA, WRONG_FARE_TYPE_MODIFIER_ID
   * - 401 Unauthorized
   * - 404 FARE_TYPE_MODIFIER_NOT_FOUND
   * - 500 Internal server error
   */
  function get({fareTypeModifierId, token, jwtToken, headers}) {
    return client.get(`/fare-type-modifiers/${fareTypeModifierId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fare-type-modifiers - create fare-type modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.fareTypeModifier - Fare-type modifier payload (FareTypeModifierPostData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifier: Object }>>}
   * @throws
   * - 400 WRONG_DATA, *_NOT_FOUND, INVALID_*, DUPLICATE_*
   * - 401 Unauthorized
   * - 500 Internal server error
   */
  function create({jwtToken, token, fareTypeModifier, headers}) {
    return client({
      url: "/fare-type-modifiers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        fareTypeModifier
      }
    });
  }

  /**
   * DELETE /fare-type-modifiers/:fareTypeModifierId - remove fare-type modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fareTypeModifierId - Fare-type modifier id (24 hex characters)
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifierId: string }>>}
   * @throws
   * - 400 WRONG_FARE_TYPE_MODIFIER_ID
   * - 401 Unauthorized
   * - 404 FARE_TYPE_MODIFIER_NOT_FOUND
   * - 500 Internal server error
   */
  function remove({jwtToken, fareTypeModifierId, token, headers}) {
    return client({
      url: `/fare-type-modifiers/${fareTypeModifierId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /fare-type-modifiers/:fareTypeModifierId - update fare-type modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.fareTypeModifierId - Fare-type modifier id (24 hex characters)
   * @param {Object} opts.fareTypeModifier - Fare-type modifier payload (FareTypeModifierPutData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifier: Object }>>}
   * @throws
   * - 400 WRONG_DATA, *_NOT_FOUND, INVALID_*, DUPLICATE_*
   * - 401 Unauthorized
   * - 404 FARE_TYPE_MODIFIER_NOT_FOUND
   * - 500 Internal server error
   */
  function update({jwtToken, token, fareTypeModifierId, fareTypeModifier, headers}) {
    return client({
      url: `/fare-type-modifiers/${fareTypeModifierId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        fareTypeModifier
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = fareTypeModifierFactory;
