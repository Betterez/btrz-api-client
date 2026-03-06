const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} OperatingCompaniesQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for operating-companies API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function, sequences: object }}
 */
function operatingCompaniesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /operating-companies - list operating companies.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OperatingCompaniesQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/operating-companies",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /operating-companies - create operating company.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.operatingCompany - Operating company payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, operatingCompany, headers}) {
    return client({
      url: "/operating-companies",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operatingCompany}
    });
  }

  /**
   * PUT /operating-companies/:operatingCompanyId - update operating company.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operatingCompanyId - Operating company id
   * @param {Object} opts.operatingCompany - Operating company payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, operatingCompanyId, operatingCompany, headers}) {
    return client({
      url: `/operating-companies/${operatingCompanyId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operatingCompany}
    });
  }

  /**
   * GET /operating-companies/:operatingCompanyId - get operating company by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operatingCompanyId - Operating company id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, operatingCompanyId, jwtToken, headers}) {
    return client({
      url: `/operating-companies/${operatingCompanyId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  /** @type {{ create: function, all: function, get: function, update: function }} */
  const sequences = {
    /**
     * POST /operating-companies/:operatingCompanyId/sequences - create sequence.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {Object} opts.sequence - Sequence payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({jwtToken, token, operatingCompanyId, sequence, headers}) {
      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: sequence
      });
    },
    /**
     * GET /operating-companies/:operatingCompanyId/sequences - list sequences.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({jwtToken, token, operatingCompanyId, headers}) {
      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences`,
        method: "get",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * GET /operating-companies/:operatingCompanyId/sequences/:sequenceId - get sequence.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {string} opts.sequenceId - Sequence id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({jwtToken, token, operatingCompanyId, sequenceId, headers}) {
      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences/${sequenceId}`,
        method: "get",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * PUT /operating-companies/:operatingCompanyId/sequences/:sequenceId - update sequence.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {string} opts.sequenceId - Sequence id
     * @param {Object} opts.sequence - Sequence payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({jwtToken, token, operatingCompanyId, sequenceId, sequence, headers}) {
      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences/${sequenceId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: sequence
      });
    }
  };

  return {
    all,
    create,
    update,
    get,
    sequences
  };
}

module.exports = operatingCompaniesFactory;
