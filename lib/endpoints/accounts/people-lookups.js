"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /people-lookups (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} PeopleLookupsListQuery
 * @property {string} [dynamicFormId] - If provided, only include this dynamic form's data in response
 * @property {string} [documentNumber] - Document number to search for
 * @property {string} [documentTypeId] - Document type id to search for
 * @property {string} [email] - Email to search for
 * @property {string} [customerNumber] - Customer number to search for
 * @property {string} [phone] - Phone to search for
 */

/**
 * Query params for GET /people-lookups/:personId (btrz-api-accounts). See get-by-id-handler getSpec().
 * @typedef {Object} PeopleLookupGetByIdQuery
 * @property {string} [dynamicFormId] - If provided, only include this dynamic form's data in response
 */

/**
 * Factory for people-lookups API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getById: function, update: function, create: function, remove: function }}
 */


function peopleLookupsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /people-lookups - list people lookups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PeopleLookupsListQuery} [opts.query] - Query params (dynamicFormId, documentNumber, documentTypeId, email, customerNumber, phone)
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query,
        headers = _ref2.headers,
        providerId = _ref2.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/people-lookups",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /people-lookups/:personId - get a person lookup.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (ObjectId)
   * @param {PeopleLookupGetByIdQuery} [opts.query] - Query params: dynamicFormId
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        query = _ref3.query,
        headers = _ref3.headers,
        personId = _ref3.personId,
        providerId = _ref3.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;

    return client({
      url: "/people-lookups/" + personId,
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /people-lookups/:personId - update a person lookup. API getSpec() does not define query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (ObjectId)
   * @param {Object} opts.person - Person payload
   * @param {string} [opts.providerId] - Provider id (ObjectId); sent as query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        personId = _ref4.personId,
        person = _ref4.person,
        headers = _ref4.headers,
        providerId = _ref4.providerId;

    var query = providerId ? { providerId: providerId } : {};

    return client({
      url: "/people-lookups/" + personId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: {
        person: person
      }
    });
  }

  /**
   * POST /people-lookups - create a person lookup. API getSpec() does not define query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.person - Person payload
   * @param {string} [opts.providerId] - Provider id (ObjectId); sent as query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        person = _ref5.person,
        headers = _ref5.headers,
        providerId = _ref5.providerId;

    var query = providerId ? { providerId: providerId } : {};

    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: {
        person: person
      }
    });
  }

  /**
   * DELETE /people-lookups/:personId - remove a person lookup. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref6) {
    var personId = _ref6.personId,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/people-lookups/" + personId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    getById: getById,
    update: update,
    create: create,
    remove: remove
  };
}

module.exports = peopleLookupsFactory;