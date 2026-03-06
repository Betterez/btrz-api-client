"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/operating-companies",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        operatingCompany = _ref3.operatingCompany,
        headers = _ref3.headers;

    return client({
      url: "/operating-companies",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operatingCompany: operatingCompany }
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
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        operatingCompanyId = _ref4.operatingCompanyId,
        operatingCompany = _ref4.operatingCompany,
        headers = _ref4.headers;

    return client({
      url: "/operating-companies/" + operatingCompanyId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operatingCompany: operatingCompany }
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
    var token = _ref5.token,
        operatingCompanyId = _ref5.operatingCompanyId,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/operating-companies/" + operatingCompanyId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  /** @type {{ create: function, all: function, get: function, update: function }} */
  var sequences = {
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
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          operatingCompanyId = _ref6.operatingCompanyId,
          sequence = _ref6.sequence,
          headers = _ref6.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
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
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          operatingCompanyId = _ref7.operatingCompanyId,
          headers = _ref7.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences",
        method: "get",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
      var jwtToken = _ref8.jwtToken,
          token = _ref8.token,
          operatingCompanyId = _ref8.operatingCompanyId,
          sequenceId = _ref8.sequenceId,
          headers = _ref8.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences/" + sequenceId,
        method: "get",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
      var jwtToken = _ref9.jwtToken,
          token = _ref9.token,
          operatingCompanyId = _ref9.operatingCompanyId,
          sequenceId = _ref9.sequenceId,
          sequence = _ref9.sequence,
          headers = _ref9.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences/" + sequenceId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    }
  };

  return {
    all: all,
    create: create,
    update: update,
    get: get,
    sequences: sequences
  };
}

module.exports = operatingCompaniesFactory;