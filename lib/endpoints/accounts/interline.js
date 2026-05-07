

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for interline API (btrz-api-accounts). Interline invitations, consumers, providers, network.
 * POST/PUT/DELETE require BETTEREZ_APP.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ invitations: object, consumers: object, providers: object, network: object, remove: function }}
 */


function interlineFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  const invitations = {
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
      const token = _ref2.token;
      const jwtToken = _ref2.jwtToken;
      const _ref2$query = _ref2.query;
      const query = _ref2$query === undefined ? {} : _ref2$query;
      const headers = _ref2.headers;

      return client({
        url: "/interline/invitations",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      const token = _ref3.token;
      const invitationId = _ref3.invitationId;
      const headers = _ref3.headers;

      return client.get(`/interline/invitations/${invitationId}`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
      const data = _ref4.data;
      const token = _ref4.token;
      const jwtToken = _ref4.jwtToken;
      const headers = _ref4.headers;

      return client({
        url: "/interline/invitations",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
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
      const invitationId = _ref5.invitationId;
      const data = _ref5.data;
      const token = _ref5.token;
      const jwtToken = _ref5.jwtToken;
      const headers = _ref5.headers;

      return client({
        url: `/interline/invitations/${invitationId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  const consumers = {
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
      const token = _ref6.token;
      const jwtToken = _ref6.jwtToken;
      const _ref6$query = _ref6.query;
      const query = _ref6$query === undefined ? {} : _ref6$query;
      const headers = _ref6.headers;

      return client({
        url: "/interline/consumers",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const providers = {
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
      const token = _ref7.token;
      const jwtToken = _ref7.jwtToken;
      const _ref7$query = _ref7.query;
      const query = _ref7$query === undefined ? {} : _ref7$query;
      const headers = _ref7.headers;

      return client({
        url: "/interline/providers",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const network = {
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
      const token = _ref8.token;
      const jwtToken = _ref8.jwtToken;
      const interlineId = _ref8.interlineId;
      const headers = _ref8.headers;

      return client.get(`/interline/${interlineId}/network`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      const interlineId = _ref9.interlineId;
      const data = _ref9.data;
      const token = _ref9.token;
      const jwtToken = _ref9.jwtToken;
      const headers = _ref9.headers;

      return client({
        url: `/interline/${interlineId}/network`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    invitations,
    consumers,
    providers,
    network,
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
      const interlineId = _ref10.interlineId;
      const token = _ref10.token;
      const jwtToken = _ref10.jwtToken;
      const headers = _ref10.headers;

      return client({
        url: `/interline/${interlineId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
}

module.exports = interlineFactory;
