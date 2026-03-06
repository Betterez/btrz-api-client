const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for fallback-codes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
function fallbackCodesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /fallback-codes - list fallback codes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/fallback-codes", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /fallback-code/:id - get fallback code by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.id - Fallback code id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, id, headers}) {
    return client.get(`/fallback-code/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fallback-codes - create fallback code.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fallbackCode - Fallback code payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, fallbackCode, headers}) {
    return client({
      url: "/fallback-codes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fallbackCode}
    });
  }

  /**
   * PUT /fallback-code/:fallbackCodeId - update fallback code.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fallbackCodeId - Fallback code id
   * @param {Object} opts.fallbackCode - Fallback code payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, fallbackCodeId, fallbackCode, headers}) {
    return client({
      url: `/fallback-code/${fallbackCodeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fallbackCode}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = fallbackCodesFactory;
