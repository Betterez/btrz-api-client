"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /users (btrz-api-accounts). See get-users getSpec().
 * @typedef {Object} GetUsersListQuery
 * @property {number} [page] - Page number (1-based). When provided, response is limited to pageSize items.
 * @property {string} [deleted] - "true" | "false" to filter by deleted flag
 * @property {string} [firstName] - Filter by first name (prefix, case-insensitive)
 * @property {string} [lastName] - Filter by last name (prefix, case-insensitive)
 * @property {string} [display] - Filter by display name (prefix, case-insensitive)
 * @property {string} [externalId] - Filter by external ID (exact)
 * @property {string} [employeeNumber] - Filter by employee number (exact)
 * @property {string} [email] - Filter by email (prefix, case-insensitive)
 * @property {string} [assignableToManifest] - "true" | "false"
 * @property {string} [role] - Filter users that have this role (role key)
 * @property {string} [excludedRoles] - Comma-separated role keys to exclude
 * @property {string} [preferredLocationId] - Filter by preferred location ID
 * @property {string} [preferredLocationIds] - Filter by preferred location IDs
 */

/**
 * Query params for GET /users/:userId/sequences (btrz-api-accounts). See get-user-sequences-handler getSpec().
 * @typedef {Object} UserSequencesListQuery
 * @property {string} [status] - inUse | notAvailable
 * @property {boolean} [nextSequenceNumber] - Include next sequence number
 */

/**
 * Factory for users API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, getV2: function, all: function, create: function, login: function, update: function, delete: function, createOrUpdateMany: function, impersonate: function, startMfa: function, confirmMfa: function, disableMfa: function, sequences: { get: function, all: function, create: function, update: function, transfer: function } }}
 */


function usersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /user/:id - get a user by id (legacy). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - User id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers;

    return client({
      url: "/user/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /users/:id - get a user by id (v2). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - User id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getV2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        headers = _ref3.headers;

    return client({
      url: "/users/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /users - list users with optional pagination and filters.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {GetUsersListQuery} [opts.query] - Query params (page, deleted, firstName, lastName, display, externalId, employeeNumber, email, assignableToManifest, role, excludedRoles, preferredLocationId, preferredLocationIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      url: "/users",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /users - login (create session).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Login payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function login(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/users",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  /**
   * @deprecated Use login instead. POST /users - create user (alias for login).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - User data
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        data = _ref6.data,
        headers = _ref6.headers;

    return login({ token: token, jwtToken: jwtToken, query: query, data: data, headers: headers });
  }

  /**
   * PUT /users/:userId - update a user. Emits webhook user.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.userId - User id (ObjectId)
   * @param {Object} opts.user - User payload (allowed fields per PUT /users/:userId spec)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ user: Object }>>}
   */
  function update(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        userId = _ref7.userId,
        user = _ref7.user,
        headers = _ref7.headers;

    return client({
      url: "/users/" + userId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { user: user }
    });
  }

  /**
   * DELETE /users/:id - delete a user. Emits webhook user.deleted. Returns 204 on success.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - User id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteUser(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        id = _ref8.id,
        headers = _ref8.headers;

    return client({
      url: "/users/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /users/import - create or update many users.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Array} opts.users - Array of user objects
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function createOrUpdateMany(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        users = _ref9.users,
        headers = _ref9.headers;

    return client({
      url: "/users/import",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { users: users }
    });
  }

  /**
   * POST /users/impersonate - start impersonation session.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.offlineUserId - Offline user id to impersonate
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function impersonate(_ref10) {
    var token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        offlineUserId = _ref10.offlineUserId,
        headers = _ref10.headers;

    return client({
      url: "/users/impersonate",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { offlineUserId: offlineUserId }
    });
  }

  /**
   * POST /users/:userId/mfa - start MFA setup.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.userId - User id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function startMfa(_ref11) {
    var token = _ref11.token,
        jwtToken = _ref11.jwtToken,
        userId = _ref11.userId,
        headers = _ref11.headers;

    return client({
      url: "/users/" + userId + "/mfa",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /users/:userId/mfa - confirm MFA with TOTP token.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.userId - User id (ObjectId)
   * @param {string} opts.totpToken - TOTP token from authenticator app
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function confirmMfa(_ref12) {
    var token = _ref12.token,
        jwtToken = _ref12.jwtToken,
        userId = _ref12.userId,
        totpToken = _ref12.totpToken,
        headers = _ref12.headers;

    return client({
      url: "/users/" + userId + "/mfa",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { token: totpToken }
    });
  }

  /**
   * DELETE /users/:userId/mfa - disable MFA for user.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.userId - User id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function disableMfa(_ref13) {
    var token = _ref13.token,
        jwtToken = _ref13.jwtToken,
        userId = _ref13.userId,
        headers = _ref13.headers;

    return client({
      url: "/users/" + userId + "/mfa",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  var sequences = {
    /**
     * GET /users/:userId/sequences/:sequenceId - get a sequence. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.userId - User id (ObjectId)
     * @param {string} opts.sequenceId - Sequence id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref14) {
      var token = _ref14.token,
          jwtToken = _ref14.jwtToken,
          userId = _ref14.userId,
          sequenceId = _ref14.sequenceId,
          headers = _ref14.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * GET /users/:userId/sequences - list sequences for user.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.userId - User id (ObjectId)
     * @param {UserSequencesListQuery} [opts.query] - Query params (status, nextSequenceNumber)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref15) {
      var token = _ref15.token,
          jwtToken = _ref15.jwtToken,
          userId = _ref15.userId,
          _ref15$query = _ref15.query,
          query = _ref15$query === undefined ? {} : _ref15$query,
          headers = _ref15.headers;

      return client({
        url: "/users/" + userId + "/sequences",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /users/:userId/sequences - create a sequence.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.userId - User id (ObjectId)
     * @param {Object} opts.sequence - Sequence payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref16) {
      var jwtToken = _ref16.jwtToken,
          token = _ref16.token,
          userId = _ref16.userId,
          sequence = _ref16.sequence,
          headers = _ref16.headers;

      return client({
        url: "/users/" + userId + "/sequences",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },

    /**
     * PUT /users/:userId/sequences/:sequenceId - update a sequence.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.userId - User id (ObjectId)
     * @param {string} opts.sequenceId - Sequence id (ObjectId)
     * @param {Object} opts.sequence - Sequence payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref17) {
      var jwtToken = _ref17.jwtToken,
          token = _ref17.token,
          userId = _ref17.userId,
          sequenceId = _ref17.sequenceId,
          sequence = _ref17.sequence,
          headers = _ref17.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },

    /**
     * PATCH /users/:userId/sequences/:sequenceId - transfer sequence to another user.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.userId - User id (ObjectId)
     * @param {string} opts.sequenceId - Sequence id (ObjectId)
     * @param {string} opts.newUserId - Target user id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    transfer: function transfer(_ref18) {
      var jwtToken = _ref18.jwtToken,
          token = _ref18.token,
          userId = _ref18.userId,
          sequenceId = _ref18.sequenceId,
          newUserId = _ref18.newUserId,
          headers = _ref18.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        method: "patch",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: {
          operation: "transfer",
          newUserId: newUserId
        }
      });
    }
  };

  return {
    get: get,
    getV2: getV2,
    all: all,
    create: create,
    login: login,
    update: update,
    delete: deleteUser,
    createOrUpdateMany: createOrUpdateMany,
    impersonate: impersonate,
    startMfa: startMfa,
    confirmMfa: confirmMfa,
    disableMfa: disableMfa,
    sequences: sequences
  };
}

module.exports = usersFactory;