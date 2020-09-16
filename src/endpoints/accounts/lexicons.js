const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function lexiconsFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token,
    context,
    query = {}
  }) {
    const queryObj = Object.assign({}, query, {context});

    return client({
      url: "lexicons/buscompany",
      params: queryObj,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({
    token,
    jwtToken,
    lexiconEntries
  }) {
    return client({
      url: "/lexicons",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        entries: lexiconEntries
      }
    });
  }

  function createOrUpdateMany({
    token,
    jwtToken,
    entries
  }) {
    return client({
      url: "/lexicons",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider
      }),
      data: {
        entries
      }
    });
  }

  function updateMany({
    token,
    jwtToken,
    updates
  }) {
    return client({
      url: "/lexicons",
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        updates
      }
    });
  }

  return {
    all,
    create,
    createOrUpdateMany,
    updateMany
  };
}

module.exports = lexiconsFactory;
