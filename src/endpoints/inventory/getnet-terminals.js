const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function getnetTerminalFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/getnet-terminals", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({getnetTerminalId, token, headers}) {
    return client.get(`/getnet-terminals/${getnetTerminalId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, getnetTerminal, headers}) {
    return client({
      url: "/getnet-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        getnetTerminal
      }
    });
  }

  function remove({jwtToken, getnetTerminalId, token, headers}) {
    return client({
      url: `/getnet-terminals/${getnetTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, getnetTerminal, headers}) {
    const getnetTerminalId = getnetTerminal._id;

    return client({
      url: `/getnet-terminals/${getnetTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        getnetTerminal: {
          name: getnetTerminal.name,
          serialNumber: getnetTerminal.serialNumber
        }
      }
    });
  }

  return {
    all,
    get,
    create,
    remove,
    update
  };
}

module.exports = getnetTerminalFactory;
