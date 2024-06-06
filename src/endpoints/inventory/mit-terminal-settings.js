const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function mitTerminalFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/mit-terminals-settings", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({id, token, jwtToken, headers}) {
    return client.get(`/mit-terminals-settings/${id}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, mitTerminalSettings, headers}) {
    return client({
      url: "/mit-terminals-settings",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        mitTerminalSettings
      }
    });
  }

  function remove({jwtToken, id, token, headers}) {
    return client({
      url: `/mit-terminals-settings/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, id, mitTerminalSettings, headers}) {
    return client({
      url: `/mit-terminals-settings/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        mitTerminalSettings
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
