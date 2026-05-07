

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /holidays (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} HolidaysListQuery
 * @property {number} [page] - The page number to retrieve
 * @property {string} [providerId] - Provider (account) id to list holidays for
 */

/**
 * Factory for holidays API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function holidaysFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /holidays - list holidays (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {HolidaysListQuery} [opts.query] - Query params (page, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holidays: Object[], next?: string, previous?: string, count: number }>>}
   * @throws 400 INVALID_PAGE; 401; 500.
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/holidays", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /holidays/:holidayId - get holiday by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.holidayId - Holiday id (24 hex characters)
   * @param {{ providerId?: string }} [opts.query] - Optional providerId
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holiday: Object }>>}
   * @throws 400 INVALID_HOLIDAY_ID, INVALID_PROVIDER_ID; 401; 404 HOLIDAY_NOT_FOUND; 500.
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const holidayId = _ref3.holidayId;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/holidays/${holidayId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /holidays - create holiday.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.holiday - Holiday payload (day, month, year required; name, blackout, recurring, externalId optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holiday: Object }>>}
   * @throws 400 WRONG_DATA; 401; 500.
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const holiday = _ref4.holiday;
    const headers = _ref4.headers;

    return client({
      url: "/holidays",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {holiday}
    });
  }

  /**
   * PUT /holidays/:holidayId - update holiday.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.holidayId - Holiday id
   * @param {Object} opts.holiday - Holiday payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holiday: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_HOLIDAY_ID; 401; 404 HOLIDAY_NOT_FOUND; 500.
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const holidayId = _ref5.holidayId;
    const holiday = _ref5.holiday;
    const headers = _ref5.headers;

    return client({
      url: `/holidays/${holidayId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {holiday}
    });
  }

  /**
   * DELETE /holidays/:holidayId - remove holiday.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.holidayId - Holiday id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holidayId: string }>>}
   * @throws 400 INVALID_HOLIDAY_ID; 401; 404 HOLIDAY_NOT_FOUND; 500.
   */
  function remove(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const holidayId = _ref6.holidayId;
    const headers = _ref6.headers;

    return client({
      url: `/holidays/${holidayId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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

module.exports = holidaysFactory;
