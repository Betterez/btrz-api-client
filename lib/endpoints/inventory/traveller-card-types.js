

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /traveller-card-types (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} TravellerCardTypesListQuery
 * @property {string} [providerIds] - Provider ids to get traveller card types for
 */

/**
 * Factory for traveller-card-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function, remove: function }}
 */


function travellerCardTypesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /traveller-card-types - list traveller card types.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TravellerCardTypesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/traveller-card-types",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /traveller-card-types - create traveller card type. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.travellerCardType - Traveller card type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const travellerCardType = _ref3.travellerCardType;
    const headers = _ref3.headers;

    return client({
      url: "/traveller-card-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardType}
    });
  }

  /**
   * PUT /traveller-card-types/:travellerCardTypeId - update traveller card type. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {Object} opts.travellerCardType - Traveller card type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const travellerCardTypeId = _ref4.travellerCardTypeId;
    const travellerCardType = _ref4.travellerCardType;
    const headers = _ref4.headers;

    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardType}
    });
  }

  /**
   * GET /traveller-card-types/:travellerCardTypeId - get traveller card type by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    const token = _ref5.token;
    const travellerCardTypeId = _ref5.travellerCardTypeId;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  /**
   * DELETE /traveller-card-types/:travellerCardTypeId - remove traveller card type. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref6) {
    const token = _ref6.token;
    const travellerCardTypeId = _ref6.travellerCardTypeId;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;

    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    create,
    update,
    get,
    remove
  };
}

module.exports = travellerCardTypesFactory;
