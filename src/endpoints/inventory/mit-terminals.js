const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function mitTerminalFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/mit-terminals", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({mitTerminalId, token, headers}) {
    return client.get(`/mit-terminals/${mitTerminalId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, mitTerminal, headers}) {
    return client({
      url: "/mit-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        mitTerminal
      }
    });
  }

  function remove({jwtToken, mitTerminalId, token, headers}) {
    return client({
      url: `/mit-terminals/${mitTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, mitTerminalId, mitTerminal, headers}) {
    return client({
      url: `/mit-terminals/${mitTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        mitTerminal
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = mitTerminalFactory;
