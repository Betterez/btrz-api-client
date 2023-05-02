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

  function getById({token, jwtToken, query, headers, personId}) {
    return client({
      url: `/people-lookups/${personId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, personId, person, headers}) {
    return client({
      url: `/people-lookups/${personId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        person
      }
    });
  }

  function create({jwtToken, token, person, headers}) {
    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
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
