/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for vouchers API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} vouchers API methods
 */
function vouchersFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * POST /vouchers - create voucher. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {Object} [opts.voucher] - Voucher payload
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    jwtToken, token, headers, query = {}, voucher = {}
  }) {
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
  function compensationsCreate({token, jwtToken, compensation, query = {}, headers}) {
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
