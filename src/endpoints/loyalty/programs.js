const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /programs (loyalty). Client merges context into query.
 * @typedef {Object} LoyaltyProgramsListQuery
 * @property {string} [context] - Context (merged from opts.context by client)
 * @property {string} [providerId] - Provider id (if supported by backend)
 */

/**
 * Factory for loyalty programs API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, put: function }}
 */
function programsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /programs - list loyalty programs. Query is merged with context (context takes precedence in merge).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.context] - Context; merged into query as query.context
   * @param {LoyaltyProgramsListQuery} [opts.query] - Additional query params (merged with context)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, context, query = {}, headers}) {
    const queryObj = Object.assign({}, query, {context});

    return client({
      url: "/programs",
      params: queryObj,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /programs - create loyalty program.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.program - Program payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, program, headers}) {
    return client({
      url: "/programs",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: program
    });
  }

  /**
   * PUT /programs/:programId - update loyalty program.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.programId - Program id
   * @param {Object} opts.program - Program payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function put({token, jwtToken, programId, program, headers}) {
    return client({
      url: `/programs/${programId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: program
    });
  }

  return {
    all,
    create,
    put
  };
}

module.exports = programsFactory;
