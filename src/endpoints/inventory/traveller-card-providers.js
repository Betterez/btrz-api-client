const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for traveller-card-providers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */
function travellerCardProvidersFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /traveller-card-providers - list traveller card providers. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
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
  function create({token, jwtToken, travellerCardProvider, headers}) {
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
  function update({jwtToken, token, travellerCardProviderId, travellerCardProvider, headers}) {
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
  function get({token, travellerCardProviderId, jwtToken, headers}) {
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
