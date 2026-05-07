

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for banks API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function banksFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/banks", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const bankId = _ref3.bankId;
    const token = _ref3.token;
    const headers = _ref3.headers;
    const jwtToken = _ref3.jwtToken;

    return client.get(`/banks/${bankId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const bank = _ref4.bank;
    const headers = _ref4.headers;

    return client({
      url: "/banks",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        bank
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
    const jwtToken = _ref5.jwtToken;
    const bankId = _ref5.bankId;
    const token = _ref5.token;
    const headers = _ref5.headers;

    return client({
      url: `/banks/${bankId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const bankId = _ref6.bankId;
    const bank = _ref6.bank;
    const headers = _ref6.headers;

    return client({
      url: `/banks/${bankId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        bank
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

module.exports = banksFactory;
