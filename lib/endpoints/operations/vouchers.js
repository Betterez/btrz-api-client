

/* eslint-disable max-len */
const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for vouchers API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} vouchers API methods
 */


function vouchersFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /vouchers - create voucher. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {Object} [opts.voucher] - Voucher payload
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const token = _ref2.token;
    const headers = _ref2.headers;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const _ref2$voucher = _ref2.voucher;
    const voucher = _ref2$voucher === undefined ? {} : _ref2$voucher;

    return client({
      url: "/vouchers",
      method: "POST",
      params: query,
      data: voucher,
      headers: authorizationHeaders({
        jwtToken,
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * POST /vouchers/compensations - create compensation. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.compensation - Compensation payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function compensationsCreate(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const compensation = _ref3.compensation;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: "/vouchers/compensations",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: compensation
    });
  }

  return {
    create,
    compensations: {
      create: compensationsCreate
    }
  };
}

module.exports = vouchersFactory;
