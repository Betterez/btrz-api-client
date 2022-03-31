const {
  authorizationHeaders
} = require("../endpoints_helpers");

function cardpointeTerminalsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, headers}) {
    return client.get("/cardpointe-terminals", {
      params: {},
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  function remove({token, jwtToken, merchantId, terminalId, headers}) {
    return client({
      url: `/cardpointe-terminals/${merchantId}/${terminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const readCard = {
    get({token, jwtToken, readCardResultId, headers}) {
      return client.get(`/cardpointe-terminals/read-card/${readCardResultId}`, {
        params: {},
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({token, jwtToken, readCard, headers}) {
      return client({
        url: "/cardpointe-terminals/read-card",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {readCard}
      });
    }
  };

  const ping = {
    create({token, jwtToken, ping, headers}) {
      return client({
        url: "/cardpointe-terminals/ping",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {ping}
      });
    }
  }
  

  return {
    all,
    remove,
    readCard,
    ping
  };
}
module.exports = {
  cardpointeTerminalsFactory
};
