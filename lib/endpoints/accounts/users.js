

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    const _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const id = _ref2.id;
    const headers = _ref2.headers;

    return client({
      url: `/user/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const headers = _ref3.headers;

    return client({
      url: `/users/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const headers = _ref4.headers;

    return client({
      url: "/users",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const _ref5$query = _ref5.query;
    const query = _ref5$query === undefined ? {} : _ref5$query;
    const data = _ref5.data;
    const headers = _ref5.headers;

    return client({
      url: "/users",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
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
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const _ref6$query = _ref6.query;
    const query = _ref6$query === undefined ? {} : _ref6$query;
    const data = _ref6.data;
    const headers = _ref6.headers;

    return login({token, jwtToken, query, data, headers});
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
    const token = _ref7.token;
    const jwtToken = _ref7.jwtToken;
    const userId = _ref7.userId;
    const user = _ref7.user;
    const headers = _ref7.headers;

    return client({
      url: `/users/${userId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {user}
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
    const token = _ref8.token;
    const jwtToken = _ref8.jwtToken;
    const id = _ref8.id;
    const headers = _ref8.headers;

    return client({
      url: `/users/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const token = _ref9.token;
    const jwtToken = _ref9.jwtToken;
    const users = _ref9.users;
    const headers = _ref9.headers;

    return client({
      url: "/users/import",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {users}
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
    const token = _ref10.token;
    const jwtToken = _ref10.jwtToken;
    const offlineUserId = _ref10.offlineUserId;
    const headers = _ref10.headers;

    return client({
      url: "/users/impersonate",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {offlineUserId}
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
    const token = _ref11.token;
    const jwtToken = _ref11.jwtToken;
    const userId = _ref11.userId;
    const headers = _ref11.headers;

    return client({
      url: `/users/${userId}/mfa`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    const token = _ref12.token;
    const jwtToken = _ref12.jwtToken;
    const userId = _ref12.userId;
    const totpToken = _ref12.totpToken;
    const headers = _ref12.headers;

    return client({
      url: `/users/${userId}/mfa`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {token: totpToken}
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
    const token = _ref13.token;
    const jwtToken = _ref13.jwtToken;
    const userId = _ref13.userId;
    const headers = _ref13.headers;

    return client({
      url: `/users/${userId}/mfa`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const sequences = {
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
      const token = _ref14.token;
      const jwtToken = _ref14.jwtToken;
      const userId = _ref14.userId;
      const sequenceId = _ref14.sequenceId;
      const headers = _ref14.headers;

      return client({
        url: `/users/${userId}/sequences/${sequenceId}`,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      const token = _ref15.token;
      const jwtToken = _ref15.jwtToken;
      const userId = _ref15.userId;
      const _ref15$query = _ref15.query;
      const query = _ref15$query === undefined ? {} : _ref15$query;
      const headers = _ref15.headers;

      return client({
        url: `/users/${userId}/sequences`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      const jwtToken = _ref16.jwtToken;
      const token = _ref16.token;
      const userId = _ref16.userId;
      const sequence = _ref16.sequence;
      const headers = _ref16.headers;

      return client({
        url: `/users/${userId}/sequences`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
      const jwtToken = _ref17.jwtToken;
      const token = _ref17.token;
      const userId = _ref17.userId;
      const sequenceId = _ref17.sequenceId;
      const sequence = _ref17.sequence;
      const headers = _ref17.headers;

      return client({
        url: `/users/${userId}/sequences/${sequenceId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
      const jwtToken = _ref18.jwtToken;
      const token = _ref18.token;
      const userId = _ref18.userId;
      const sequenceId = _ref18.sequenceId;
      const newUserId = _ref18.newUserId;
      const headers = _ref18.headers;

      return client({
        url: `/users/${userId}/sequences/${sequenceId}`,
        method: "patch",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          operation: "transfer",
          newUserId
        }
      });
    }
  };

  return {
    get,
    getV2,
    all,
    create,
    login,
    update,
    delete: deleteUser,
    createOrUpdateMany,
    impersonate,
    startMfa,
    confirmMfa,
    disableMfa,
    sequences
  };
}

module.exports = usersFactory;
