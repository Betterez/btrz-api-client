const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for interline API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ invitations: object, consumers: object, providers: object, network: object, remove: function }}
 */
function interlineFactory({client, internalAuthTokenProvider}) {
  const invitations = {
    /**
     * GET /interline/invitations - list interline invitations. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/interline/invitations",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * GET /interline/invitations/:invitationId - get an invitation. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.invitationId - Invitation id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, invitationId, headers}) {
      return client.get(`/interline/invitations/${invitationId}`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /interline/invitations - create an invitation.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Invitation payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
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
     * PUT /interline/invitations/:invitationId - update an invitation.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.invitationId - Invitation id (ObjectId)
     * @param {Object} opts.data - Invitation payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
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
     * GET /interline/consumers - list interline consumers. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
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
     * GET /interline/providers - list interline providers. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
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
     * GET /interline/:interlineId/network - get interline network. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.interlineId - Interline id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, interlineId, headers}) {
      return client.get(`/interline/${interlineId}/network`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    },
    /**
     * PUT /interline/:interlineId/network - update interline network.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.interlineId - Interline id (ObjectId)
     * @param {Object} opts.data - Network payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
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
     * DELETE /interline/:interlineId - remove an interline.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.interlineId - Interline id (ObjectId)
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
