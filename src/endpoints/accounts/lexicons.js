const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function lexiconsFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token,
    context,
    query = {},
    headers
  }) {
    const queryObj = Object.assign({}, query, {context});

    return client({
      url: "lexicons/buscompany",
      params: queryObj,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({
    token,
    jwtToken,
    lexiconEntries,
    headers
  }) {
    return client({
      url: "/lexicons",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        entries: lexiconEntries
      }
    });
  }

  function createOrUpdateMany({
    token,
    jwtToken,
    entries,
    headers
  }) {
    return client({
      url: "/lexicons",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        entries
      }
    });
  }

  function updateMany({
    token,
    jwtToken,
    updates,
    headers
  }) {
    return client({
      url: "/lexicons",
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
