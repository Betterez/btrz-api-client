const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function banksFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/banks", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({bankId, token, headers, jwtToken}) {
    return client.get(`/banks/${bankId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, bank, headers}) {
    return client({
      url: "/banks",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        bank
      }
    });
  }

  function remove({jwtToken, bankId, token, headers}) {
    return client({
      url: `/banks/${bankId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, bankId, bank, headers}) {
    return client({
      url: `/banks/${bankId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        bank
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

module.exports = banksFactory;
