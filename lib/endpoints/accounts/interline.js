"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for interline API (btrz-api-accounts). Interline invitations, consumers, providers, network.
 * POST/PUT/DELETE require BETTEREZ_APP.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ invitations: object, consumers: object, providers: object, network: object, remove: function }}
 */


function interlineFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var invitations = {
    /**
     * GET /interline/invitations – List interline invitations (paginated). Query: page.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Optional query (e.g. page)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ invitations: object[], totalRecords: number, ... }>>}
     */
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/interline/invitations",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * GET /interline/invitations/:invitationId – Get a single invitation by id (24 hex ObjectId).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.invitationId - Invitation id (24 hex characters)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ invitation: object }>>}
     */
    get: function get(_ref3) {
      var token = _ref3.token,
          invitationId = _ref3.invitationId,
          headers = _ref3.headers;

      return client.get("/interline/invitations/" + invitationId, {
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /interline/invitations – Create an invitation. Requires BETTEREZ_APP JWT. Emits interlineinvitation.created.
     * Body: { interline } or InterlineInvitationPost at root.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
     * @param {Object} opts.data - Invitation payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ invitation: object }>>}
     */
    create: function create(_ref4) {
      var data = _ref4.data,
          token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          headers = _ref4.headers;

      return client({
        url: "/interline/invitations",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    },

    /**
     * PUT /interline/invitations/:invitationId – Update invitation (e.g. accept/reject). Requires BETTEREZ_APP.
     * Emits interlineinvitation.updated.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.invitationId - Invitation id (24 hex ObjectId)
     * @param {Object} opts.data - Body (InterlineInvitePutData)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ invitation: object }>>}
     */
    update: function update(_ref5) {
      var invitationId = _ref5.invitationId,
          data = _ref5.data,
          token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          headers = _ref5.headers;

      return client({
        url: "/interline/invitations/" + invitationId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  var consumers = {
    /**
     * GET /interline/consumers – List interline consumers (paginated). Query: page.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Optional query (e.g. page)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ consumers: object[], totalRecords: number, ... }>>}
     */
    all: function all(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query,
          headers = _ref6.headers;

      return client({
        url: "/interline/consumers",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var providers = {
    /**
     * GET /interline/providers – List interline providers (paginated). Query: page.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Optional query (e.g. page)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ providers: object[], totalRecords: number, ... }>>}
     */
    all: function all(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          headers = _ref7.headers;

      return client({
        url: "/interline/providers",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var network = {
    /**
     * GET /interline/:interlineId/network – Get interline network by interline id (24 hex ObjectId).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.interlineId - Interline id (24 hex ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ network: object }>>}
     */
    get: function get(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          interlineId = _ref8.interlineId,
          headers = _ref8.headers;

      return client.get("/interline/" + interlineId + "/network", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * PUT /interline/:interlineId/network – Update interline network. Requires BETTEREZ_APP. Emits interlinenetwork.updated.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.interlineId - Interline id (24 hex ObjectId)
     * @param {Object} opts.data - Network payload (InterlinePutData)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ network: object }>>}
     */
    update: function update(_ref9) {
      var interlineId = _ref9.interlineId,
          data = _ref9.data,
          token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          headers = _ref9.headers;

      return client({
        url: "/interline/" + interlineId + "/network",
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    invitations: invitations,
    consumers: consumers,
    providers: providers,
    network: network,
    /**
     * DELETE /interline/:interlineId – Remove an interline. Requires BETTEREZ_APP. Emits interlinenetwork.deleted.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.interlineId - Interline id (24 hex ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref10) {
      var interlineId = _ref10.interlineId,
          token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          headers = _ref10.headers;

      return client({
        url: "/interline/" + interlineId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
}

module.exports = interlineFactory;