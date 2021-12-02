const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function seatfeesFactory({client, internalAuthTokenProvider}) {
  
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/seat-fees", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({seatfeeId, token, headers}) {
    return client.get(`/seat-fees/${seatfeeId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ jwtToken, token, seatfee, headers }) {
    return client({
      url: "/seat-fees",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatfee
      }
    });
  }

  function update({jwtToken, token, seatfeeId, seatfee, headers}) {
    return client({
      url: `/seat-fees/${seatfeeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatfee
      }
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = seatfeesFactory;
