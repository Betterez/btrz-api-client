function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(r) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}; t % 2 ? ownKeys(Object(o), !0).forEach(function (t) { _defineProperty(r, t, o[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function (e) { Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e)); }); } return r; }
function _defineProperty(r, t, o) { return (t = _toPropertyKey(t)) in r ? Object.defineProperty(r, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = o, r; }
function _toPropertyKey(r) { var o = _toPrimitive(r, "string"); return "symbol" == typeof o ? o : o + ""; }
function _toPrimitive(t, e) { if ("object" != typeof t || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
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
  client,
  internalAuthTokenProvider
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
    jwtToken,
    token,
    headers,
    query = {},
    voucher = {}
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
  function compensationsCreate({
    token,
    jwtToken,
    compensation,
    query = {},
    headers
  }) {
    return client({
      url: "/vouchers/compensations",
      method: "post",
      params: query,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: compensation
    });
  }

  /**
   * GET /vouchers - list vouchers by document type and number.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth token
   * @param {Object} [opts.query] - Query params (documentTypeId, documentNumber, page, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} [opts.providerId] - Provider id (merged into query)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: "/vouchers",
      method: "GET",
      params: query_,
      headers: authorizationHeaders({
        jwtToken,
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }
  return {
    all,
    create,
    compensations: {
      create: compensationsCreate
    }
  };
}
module.exports = vouchersFactory;