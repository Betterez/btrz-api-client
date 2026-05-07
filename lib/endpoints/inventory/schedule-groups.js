

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /schedule-groups (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} ScheduleGroupsListQuery
 * @property {number} [page] - Page number to retrieve
 */

/**
 * Factory for schedule-groups API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */


function scheduleGroupsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /schedule-groups - list schedule groups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ScheduleGroupsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/schedule-groups", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /schedule-groups/:scheduleGroupId - get schedule group by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.scheduleGroupId - Schedule group id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const scheduleGroupId = _ref3.scheduleGroupId;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client.get(`/schedule-groups/${scheduleGroupId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /schedule-groups - create schedule group. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.scheduleGroup - Schedule group payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const scheduleGroup = _ref4.scheduleGroup;
    const headers = _ref4.headers;

    return client({
      url: "/schedule-groups",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {scheduleGroup}
    });
  }

  /**
   * PUT /schedule-groups/:scheduleGroupId - update schedule group. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.scheduleGroupId - Schedule group id
   * @param {Object} opts.scheduleGroup - Schedule group payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const scheduleGroupId = _ref5.scheduleGroupId;
    const scheduleGroup = _ref5.scheduleGroup;
    const headers = _ref5.headers;

    return client({
      url: `/schedule-groups/${scheduleGroupId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {scheduleGroup}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = scheduleGroupsFactory;
