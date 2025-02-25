const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function prismaTerminalFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/prisma-terminals", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({prismaTerminalId, token, jwtToken, headers}) {
    return client.get(`/prisma-terminals/${prismaTerminalId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, prismaTerminal, headers}) {
    return client({
      url: "/prisma-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        prismaTerminal
      }
    });
  }

  function remove({jwtToken, prismaTerminalId, token, headers}) {
    return client({
      url: `/prisma-terminals/${prismaTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, prismaTerminalId, prismaTerminal, headers}) {
    return client({
      url: `/prisma-terminals/${prismaTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        prismaTerminal
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

module.exports = prismaTerminalFactory;
