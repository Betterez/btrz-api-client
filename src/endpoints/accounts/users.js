/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function usersFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /user/:id - get a user by id (legacy). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - User id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, headers} = {}) {
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
  function getV2({token, jwtToken, id, headers} = {}) {
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
  function all({token, jwtToken, query = {}, headers}) {
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
  function login({token, jwtToken, query = {}, data, headers}) {
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
  function create({token, jwtToken, query = {}, data, headers}) {
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
  function update({token, jwtToken, userId, user, headers}) {
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
  function deleteUser({token, jwtToken, id, headers}) {
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
  function createOrUpdateMany({token, jwtToken, users, headers}) {
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
  function impersonate({token, jwtToken, offlineUserId, headers}) {
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
  function startMfa({token, jwtToken, userId, headers}) {
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
  function confirmMfa({token, jwtToken, userId, totpToken, headers}) {
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
  function disableMfa({token, jwtToken, userId, headers}) {
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
    get({token, jwtToken, userId, sequenceId, headers}) {
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
    all({token, jwtToken, userId, query = {}, headers}) {
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
    create({jwtToken, token, userId, sequence, headers}) {
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
    update({jwtToken, token, userId, sequenceId, sequence, headers}) {
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
    transfer({jwtToken, token, userId, sequenceId, newUserId, headers}) {
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
