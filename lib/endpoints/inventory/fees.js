

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fees (btrz-api-inventory). See fees get-handler getSpec().
 * @typedef {Object} InventoryFeesQuery
 * @property {string} [providerIds] - Comma-separated provider (account) IDs to get fees for
 * @property {string} [rules] - Comma-separated rules where the fees apply (e.g. cancel, ticket, transaction)
 * @property {string} [productId] - Product ID to filter fees by
 * @property {string} [internalId] - Fee internal id to filter by
 * @property {string} [page] - Page number for pagination (1-based). Response includes next, previous, count
 */

/**
 * Factory for fees API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */


function feesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fees - list fees (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryFeesQuery} [opts.query] - Query params (providerIds, rules, productId, internalId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fees: Array, next: string, previous: string, count: number }>>}
   * @throws When response is 4xx/5xx (401, 500)
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/fees", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /fees/:feeId - get fee by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.feeId - Fee id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fee: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 FEE_NOT_FOUND, 500)
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const feeId = _ref3.feeId;
    const headers = _ref3.headers;

    return client.get(`/fees/${feeId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fees - create fee.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fee - Fee payload (FeePostData: name, internalId, valueType, value, rules, products, lexiconKeys, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fee: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 409 CANNOT_CREATE_LEXICON_ENTRIES, 500)
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const fee = _ref4.fee;
    const headers = _ref4.headers;

    return client({
      url: "/fees",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fee}
    });
  }

  /**
   * PUT /fees/:feeId - update fee.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.feeId - Fee id
   * @param {Object} opts.fee - Fee payload (partial FeePostData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fee: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 FEE_NOT_FOUND, 409 CANNOT_UPDATE_LEXICON_ENTRIES, 500)
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const feeId = _ref5.feeId;
    const fee = _ref5.fee;
    const headers = _ref5.headers;

    return client({
      url: `/fees/${feeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fee}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = feesFactory;
