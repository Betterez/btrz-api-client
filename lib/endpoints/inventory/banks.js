"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for banks API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function banksFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /banks — List banks for the account. Paginated; optional page query param (1-based).
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {Object} [opts.query] - Query params: page (1-based page number)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ banks: Object[], count: number, next: string, previous: string }>>}
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/banks", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /banks/:bankId — Get a single bank by ID (24 hex characters).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.bankId - Bank id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bank: Object }>>}
   * @throws 400 INVALID_BANK_ID
   * @throws 401 Unauthorized
   * @throws 404 BANK_NOT_FOUND
   * @throws 500 Internal server error
   */
  function get(_ref3) {
    var bankId = _ref3.bankId,
        token = _ref3.token,
        headers = _ref3.headers,
        jwtToken = _ref3.jwtToken;

    return client.get("/banks/" + bankId, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /banks — Create a bank. Body: BankPostData (name, accountNumbers required; optional depositAlgorithmCode).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {Object} opts.bank - Bank payload (name, accountNumbers; each accountNumber: number, currency, alias)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bank: Object }>>}
   * @throws 400 WRONG_DATA, STATION_INVALID_COST_CENTER
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        bank = _ref4.bank,
        headers = _ref4.headers;

    return client({
      url: "/banks",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        bank: bank
      }
    });
  }

  /**
   * DELETE /banks/:bankId — Delete a bank by ID.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.bankId - Bank id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bankId: string }>>}
   * @throws 400 BANK_ID
   * @throws 401 Unauthorized
   * @throws 404 BANK_NOT_FOUND
   * @throws 500 Internal server error
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        bankId = _ref5.bankId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/banks/" + bankId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /banks/:bankId — Update a bank by ID. Body: BankPostData (name, accountNumbers required).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.bankId - Bank id (24 hex characters)
   * @param {Object} opts.bank - Bank payload (name, accountNumbers; each accountNumber: number, currency, alias)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bank: Object }>>}
   * @throws 400 WRONG_DATA, STATION_INVALID_COST_CENTER
   * @throws 401 Unauthorized
   * @throws 404 BANK_NOT_FOUND
   * @throws 500 Internal server error
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        bankId = _ref6.bankId,
        bank = _ref6.bank,
        headers = _ref6.headers;

    return client({
      url: "/banks/" + bankId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        bank: bank
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = banksFactory;