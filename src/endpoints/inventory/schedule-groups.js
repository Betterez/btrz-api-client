const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} ScheduleGroupsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for schedule-groups API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
function scheduleGroupsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /schedule-groups - list schedule groups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ScheduleGroupsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/schedule-groups", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /schedule-groups/:scheduleGroupId - get schedule group by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.scheduleGroupId - Schedule group id
   * @param {ScheduleGroupsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, scheduleGroupId, query = {}, headers}) {
    return client.get(`/schedule-groups/${scheduleGroupId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /schedule-groups - create schedule group.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.scheduleGroup - Schedule group payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, scheduleGroup, headers}) {
    return client({
      url: "/schedule-groups",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {scheduleGroup}
    });
  }

  /**
   * PUT /schedule-groups/:scheduleGroupId - update schedule group.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.scheduleGroupId - Schedule group id
   * @param {Object} opts.scheduleGroup - Schedule group payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, scheduleGroupId, scheduleGroup, headers}) {
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
