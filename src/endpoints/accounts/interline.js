const {
  authorizationHeaders
} = require("../endpoints_helpers");

function interlineFactory({client, internalAuthTokenProvider}) {
  function getInvitation({token, interlineId}) {
    return client.get(`/interline/invitations/${interlineId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function createInvitation({data, token, jwtToken}) {
    return client({
      url: "/interline/invitations",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function updateInvitation({interlineId, data, token, jwtToken}) {
    return client({
      url: `/interline/invitations/${interlineId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function allConsumers({token, jwtToken, query = {}}) {
    return client({
      url: "/interline/consumers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function updateConsumer({networkId, data, token, jwtToken}) {
    return client({
      url: `/interline/consumers/${networkId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function allProviders({token, jwtToken, query = {}}) {
    return client({
      url: "/interline/providers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function getNetwork({token, networkId}) {
    return client.get(`/interline/network/${networkId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function removeInterline({interlineId, token, jwtToken}) {
    return client({
      url: `/interline/${interlineId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    getInvitation,
    updateInvitation,
    createInvitation,
    removeInterline,
    allConsumers,
    updateConsumer,
    allProviders,
    getNetwork
  };
}

module.exports = interlineFactory;
