const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function peopleLookupsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: "/people-lookups",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function getById({token, jwtToken, query, headers, personId, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;

    return client({
      url: `/people-lookups/${personId}`,
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, personId, person, headers, providerId}) {
    const query = providerId ? {providerId} : {};

    return client({
      url: `/people-lookups/${personId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data: {
        person
      }
    });
  }

  function create({jwtToken, token, person, headers, providerId}) {
    const query = providerId ? {providerId} : {};

    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data: {
        person
      }
    });
  }

  function remove({personId, token, jwtToken, headers}) {
    return client({
      url: `/people-lookups/${personId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }


  return {
    all,
    getById,
    update,
    create,
    remove
  };
}

module.exports = peopleLookupsFactory;
