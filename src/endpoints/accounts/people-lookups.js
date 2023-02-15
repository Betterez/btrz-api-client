const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function peopleLookupsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/people-lookups",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function getById({token, jwtToken, query, headers, peopleLookupId}) {
    return client({
      url: `/people-lookups/${peopleLookupId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, peopleLookupId, peopleLookup, headers, query}) {
    return client({
      url: `/people-lookups/${peopleLookupId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        peopleLookup
      },
      params: query
    });
  }

  function create({jwtToken, token, peopleLookup, headers}) {
    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        peopleLookup
      }
    });
  }

  function remove({peopleLookupId, token, jwtToken, headers}) {
    return client({
      url: `/people-lookups/${peopleLookupId}`,
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
