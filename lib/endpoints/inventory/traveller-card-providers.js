

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for traveller-card-providers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */


function travellerCardProvidersFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /traveller-card-providers - list traveller card providers. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
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
      url: "/traveller-card-providers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /traveller-card-providers - create traveller card provider.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.travellerCardProvider - Traveller card provider payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const travellerCardProvider = _ref3.travellerCardProvider;
    const headers = _ref3.headers;

    return client({
      url: "/traveller-card-providers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardProvider}
    });
  }

  /**
   * PUT /traveller-card-providers/:travellerCardProviderId - update traveller card provider. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardProviderId - Traveller card provider id
   * @param {Object} opts.travellerCardProvider - Traveller card provider payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const travellerCardProviderId = _ref4.travellerCardProviderId;
    const travellerCardProvider = _ref4.travellerCardProvider;
    const headers = _ref4.headers;

    return client({
      url: `/traveller-card-providers/${travellerCardProviderId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardProvider}
    });
  }

  /**
   * GET /traveller-card-providers/:travellerCardProviderId - get traveller card provider by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardProviderId - Traveller card provider id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    const token = _ref5.token;
    const travellerCardProviderId = _ref5.travellerCardProviderId;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

    return client({
      url: `/traveller-card-providers/${travellerCardProviderId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    create,
    update,
    get
  };
}

module.exports = travellerCardProvidersFactory;
