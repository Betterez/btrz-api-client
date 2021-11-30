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
    get({token, networkId, headers}) {
      return client.get(`/interline/${networkId}`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    },
    update({networkId, data, token, jwtToken, headers}) {
      return client({
        url: `/interline/${networkId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },
    remove({networkId, token, jwtToken, headers}) {
      return client({
        url: `/interline/${networkId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    invitations,
    consumers,
    providers,
    network
  };
}

module.exports = interlineFactory;
