const {authorizationHeaders} = require("./../endpoints_helpers.js");

function shiftsFactory({client, internalAuthTokenProvider}) {
  function all({jwtToken, token, query, headers}) {
    return client.get("/shifts", {
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query
    });
  }

  function get({token, userId, headers}) {
    return client.get(`/shift/user/${userId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, shiftData, headers}) {
    return client({
      url: "/shifts",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: shiftData
    });
  }

  function update({jwtToken, token, shiftId, operations, headers, query}) {
    return client({
      url: `/shifts/${shiftId}`,
      method: "patch",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        operations
      },
      params: query
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = shiftsFactory;
