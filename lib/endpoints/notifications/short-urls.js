"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Request body for POST /short-urls (btrz-api-notifications). Sent as urlData.
 * @typedef {Object} ShortUrlPostData
 * @property {string} fullUrl - The full URL to shorten (target of the short link)
 */

/**
 * Factory for short URLs API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, getByShortId: function }}
 */


function shortUrlsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /short-urls - create a short URL for the given fullUrl. Requires JWT (BETTEREZ_APP) and X-API-KEY.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol (required for this endpoint)
   * @param {ShortUrlPostData} opts.urlData - Payload: fullUrl (required), method (optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ shortUrl: string, shortId: string, fullUrl: string, createdAt: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA fullUrl is required, 401, 500)
   */
  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        urlData = _ref2.urlData,
        headers = _ref2.headers;

    return client({
      url: "/short-urls",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { urlData: urlData }
    });
  }

  /**
   * GET /u/:shortId - resolve short ID. Returns 302 to full URL. Use maxRedirects: 0 to get Location.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} opts.shortId - The short identifier (e.g. from btrz.ca/u/<shortId>)
   * @param {number} [opts.maxRedirects=0] - Set to 0 to receive 302 and Location header without following redirect
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA shortId is required, 401, 404 SHORT_URL_NOT_FOUND, 500)
   */
  function getByShortId(_ref3) {
    var token = _ref3.token,
        shortId = _ref3.shortId,
        _ref3$maxRedirects = _ref3.maxRedirects,
        maxRedirects = _ref3$maxRedirects === undefined ? 0 : _ref3$maxRedirects,
        headers = _ref3.headers;

    return client({
      url: "/u/" + encodeURIComponent(shortId),
      method: "get",
      maxRedirects: maxRedirects,
      validateStatus: function validateStatus(status) {
        return status === 302 || status >= 200 && status < 300;
      },
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    create: create,
    getByShortId: getByShortId
  };
}

module.exports = shortUrlsFactory;