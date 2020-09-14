const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function seatfeesFactory({client, internalAuthTokenProvider}) {
  
  function all({
    token,
    query = {}
  }) {
    return client.get("/seat-fees", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({seatfeeId, token}) {
    return client.get(`/seat-fees/${seatfeeId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ jwtToken, token, seatfee }) {
    return client({
      url: "/seat-fees",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        seatfee
      }
    });
  }

  function update({jwtToken, token, seatfeeId, seatfee}) {
    return client({
      url: `/seat-fees/${seatfeeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
