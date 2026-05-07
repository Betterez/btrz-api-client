

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /operating-companies (btrz-api-inventory). See get-operating-companies getSpec().
 * @typedef {Object} OperatingCompaniesListQuery
 * @property {string} [providerIds] - Provider IDs to get operating companies for
 * @property {string} [enabled] - Filter by enabled [true, false]
 * @property {number} [page] - Page number (1-based); null for unpaginated
 */

/**
 * Factory for operating-companies API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function, sequences: object }}
 */


function operatingCompaniesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /operating-companies - list operating companies.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OperatingCompaniesListQuery} [opts.query] - Query params (providerIds, enabled, page)
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
      url: "/operating-companies",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /operating-companies - create operating company. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.operatingCompany - Operating company payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const operatingCompany = _ref3.operatingCompany;
    const headers = _ref3.headers;

    return client({
      url: "/operating-companies",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operatingCompany}
    });
  }

  /**
   * PUT /operating-companies/:operatingCompanyId - update operating company. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operatingCompanyId - Operating company id
   * @param {Object} opts.operatingCompany - Operating company payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const operatingCompanyId = _ref4.operatingCompanyId;
    const operatingCompany = _ref4.operatingCompany;
    const headers = _ref4.headers;

    return client({
      url: `/operating-companies/${operatingCompanyId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operatingCompany}
    });
  }

  /**
   * GET /operating-companies/:operatingCompanyId - get operating company by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operatingCompanyId - Operating company id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    const token = _ref5.token;
    const operatingCompanyId = _ref5.operatingCompanyId;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

    return client({
      url: `/operating-companies/${operatingCompanyId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  /** @type {{ create: function, all: function, get: function, update: function }} */
  const sequences = {
    /**
     * POST /operating-companies/:operatingCompanyId/sequences - create sequence. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {Object} opts.sequence - Sequence payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref6) {
      const jwtToken = _ref6.jwtToken;
      const token = _ref6.token;
      const operatingCompanyId = _ref6.operatingCompanyId;
      const sequence = _ref6.sequence;
      const headers = _ref6.headers;

      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: sequence
      });
    },

    /**
     * GET /operating-companies/:operatingCompanyId/sequences - list sequences. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref7) {
      const jwtToken = _ref7.jwtToken;
      const token = _ref7.token;
      const operatingCompanyId = _ref7.operatingCompanyId;
      const headers = _ref7.headers;

      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences`,
        method: "get",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * GET /operating-companies/:operatingCompanyId/sequences/:sequenceId - get sequence. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {string} opts.sequenceId - Sequence id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref8) {
      const jwtToken = _ref8.jwtToken;
      const token = _ref8.token;
      const operatingCompanyId = _ref8.operatingCompanyId;
      const sequenceId = _ref8.sequenceId;
      const headers = _ref8.headers;

      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences/${sequenceId}`,
        method: "get",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * PUT /operating-companies/:operatingCompanyId/sequences/:sequenceId - update sequence. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.operatingCompanyId - Operating company id
     * @param {string} opts.sequenceId - Sequence id
     * @param {Object} opts.sequence - Sequence payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref9) {
      const jwtToken = _ref9.jwtToken;
      const token = _ref9.token;
      const operatingCompanyId = _ref9.operatingCompanyId;
      const sequenceId = _ref9.sequenceId;
      const sequence = _ref9.sequence;
      const headers = _ref9.headers;

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
