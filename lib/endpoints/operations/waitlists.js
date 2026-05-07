

/* eslint-disable max-len */
const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /waitlists (btrz-api-operations getSpec).
 * @typedef {Object} WaitlistsListQuery
 * @property {number} [page] - Page number to return (20 records per page)
 * @property {string} [originId] - Filter by origin id (24 hex chars)
 * @property {string} [destinationId] - Filter by destination id (24 hex chars)
 * @property {string} [dateOfTravelStr] - Filter by date of travel (YYYY-MM-DD)
 */

/**
 * Factory for waitlists API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} waitlists API methods
 */


function waitlistsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /waitlists - list waitlists.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {WaitlistsListQuery} [opts.query] - page, originId, destinationId, dateOfTravelStr
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} GetWaitlistsResponse; 400 INVALID_ORIGIN_ID, INVALID_DESTINATION_ID, INVALID_DATE_OF_TRAVEL_STR
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const query = _ref2.query;
    const headers = _ref2.headers;

    return client({
      url: "/waitlists",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /waitlists/:waitlistId - get waitlist by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.waitlistId - Waitlist id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const waitlistId = _ref3.waitlistId;
    const headers = _ref3.headers;

    return client({
      url: `/waitlists/${waitlistId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /waitlists/:waitlistId - remove waitlist.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.waitlistId - Waitlist id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const waitlistId = _ref4.waitlistId;
    const headers = _ref4.headers;

    return client({
      url: `/waitlists/${waitlistId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /waitlists - create waitlist. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Waitlist payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const data = _ref5.data;
    const headers = _ref5.headers;

    return client({
      url: "/waitlists",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    all,
    get,
    remove,
    create
  };
}

module.exports = waitlistsFactory;
