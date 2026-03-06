"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /control-classes (btrz-api-inventory). See get-control-classes getSpec().
 * @typedef {Object} ControlClassesListQuery
 * @property {number} [page] - Page number
 * @property {boolean} [root] - Filter roots only
 * @property {string} [productId] - Filter by product ID
 * @property {string} [name] - Filter by name
 * @property {string} [scheduleId] - Only roots that could apply to this schedule (UUID)
 * @property {string} [assignedScheduleId] - Only roots assigned to this schedule (UUID)
 * @property {string} [amenityGroupId] - Filter by amenity group ID(s), comma-separated
 * @property {string} [brandId] - Filter by brand ID(s), comma-separated
 * @property {string} [fareId] - Filter by fare ID(s), comma-separated
 * @property {string} [fareClassId] - Filter by fare class ID(s), comma-separated
 * @property {string} [seatClassId] - Filter by seat class ID(s), comma-separated
 * @property {string} [operatingCompanyId] - Filter by operating company ID(s), comma-separated
 * @property {string} [channel] - Filter by channel(s), comma-separated
 * @property {number} [advancePurchaseFrom] - Filter by advance purchase from (hours)
 * @property {number} [advancePurchaseTo] - Filter by advance purchase to (hours)
 */

/**
 * Query params for GET /control-classes/:controlClassId (btrz-api-inventory). See get-control-class-by-id getSpec().
 * @typedef {Object} ControlClassGetQuery
 * @property {boolean} [tree] - Include the full tree
 * @property {string} [scheduleId] - When tree requested, filter by schedule
 * @property {string} [scheduleBrandId] - When tree requested, filter by schedule brand
 * @property {string} [scheduleOperatingCompanyId] - When tree requested, filter by operating company
 * @property {string} [scheduleAmenityGroupId] - When tree requested, filter by amenity group
 */

/**
 * Factory for control-classes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function controlClassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /control-classes - list control classes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ControlClassesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/control-classes", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /control-classes/:controlClassId - get control class by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.controlClassId - Control class id
   * @param {ControlClassGetQuery} [opts.query] - Query params (tree, scheduleId, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var controlClassId = _ref3.controlClassId,
        token = _ref3.token,
        headers = _ref3.headers,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client.get("/control-classes/" + controlClassId, {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /control-classes - create control class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.controlClass - Control class payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        controlClass = _ref4.controlClass,
        headers = _ref4.headers;

    return client({
      url: "/control-classes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        controlClass: controlClass
      }
    });
  }

  /**
   * DELETE /control-classes/:controlClassId - remove control class.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.controlClassId - Control class id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        controlClassId = _ref5.controlClassId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/control-classes/" + controlClassId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /control-classes/:controlClassId - update control class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.controlClassId - Control class id
   * @param {Object} opts.controlClass - Control class payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        controlClassId = _ref6.controlClassId,
        controlClass = _ref6.controlClass,
        headers = _ref6.headers;

    return client({
      url: "/control-classes/" + controlClassId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        controlClass: controlClass
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = controlClassesFactory;