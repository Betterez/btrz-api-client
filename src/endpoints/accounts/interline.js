const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function interlineFactory({client, internalAuthTokenProvider}) {
  const invitations = {
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/interline/invitations",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    get({token, invitationId, headers}) {
      return client.get(`/interline/invitations/${invitationId}`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    },
    create({data, token, jwtToken, headers}) {
      return client({
        url: "/interline/invitations",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },
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
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/interline/consumers",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const providers = {
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/interline/providers",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const network = {
    get({token, interlineId, headers}) {
      return client.get(`/interline/${interlineId}/network`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    },
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
