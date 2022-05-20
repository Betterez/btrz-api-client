const { authorizationHeaders } = require("./../endpoints_helpers");

function feesFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {}, headers }) {
    return client.get("/fees", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({ token, jwtToken, feeId, headers }) {
    return client.get(`/fees/${feeId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, jwtToken, fee, headers }) {
    return client({
      url: "/fees",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { fee }
    });
  }

  function update({ token, jwtToken, feeId, fee, headers }) {
    return client({
      url: `/fees/${feeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { fee }
    });
  }

  return { 
    all,
    get,
    create,
    update
  };

}

module.exports = feesFactory;