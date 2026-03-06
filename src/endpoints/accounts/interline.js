const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for interline API (btrz-api-accounts). Interline invitations, consumers, providers, network.
 * POST/PUT/DELETE require BETTEREZ_APP.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ invitations: object, consumers: object, providers: object, network: object, remove: function }}
 */
function interlineFactory({client, internalAuthTokenProvider}) {
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
    all({token, jwtToken, query = {}, headers}) {
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
    get({token, invitationId, headers}) {
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
    create({data, token, jwtToken, headers}) {
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
    update({invitationId, data, token, jwtToken, headers}) {
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
    all({token, jwtToken, query = {}, headers}) {
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
    all({token, jwtToken, query = {}, headers}) {
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
    get({token, jwtToken, interlineId, headers}) {
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
    update({interlineId, data, token, jwtToken, headers}) {
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
    remove({interlineId, token, jwtToken, headers}) {
      return client({
        url: `/interline/${interlineId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
}

module.exports = interlineFactory;
