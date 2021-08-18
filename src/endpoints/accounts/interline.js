const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function interlineFactory({client, internalAuthTokenProvider}) {
  const invitations = {
    all({token, jwtToken, query = {}}) {
      return client({
        url: "/interline/invitations",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
      });
    },
    get({token, invitationId}) {
      return client.get(`/interline/invitations/${invitationId}`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider})
      });
    },
    create({data, token, jwtToken}) {
      return client({
        url: "/interline/invitations",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
        data
      });
    },
    update({invitationId, data, token, jwtToken}) {
      return client({
        url: `/interline/invitations/${invitationId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
        data
      });
    }
  };

  const consumers = {
    all({token, jwtToken, query = {}}) {
      return client({
        url: "/interline/consumers",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
      });
    }
  };

  const providers = {
    all({token, jwtToken, query = {}}) {
      return client({
        url: "/interline/providers",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
      });
    }
  };

  const network = {
    get({token, networkId}) {
      return client.get(`/interline/${networkId}`, {
        headers: authorizationHeaders({token, internalAuthTokenProvider})
      });
    },
    update({networkId, data, token, jwtToken}) {
      return client({
        url: `/interline/${networkId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
        data
      });
    },
    remove({networkId, token, jwtToken}) {
      return client({
        url: `/interline/${networkId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
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
