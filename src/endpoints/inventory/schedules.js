const { authorizationHeaders } = require("./../endpoints_helpers");

function schedulesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client.get("/routes/schedules", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }


  return {
    all
  };
}

module.exports = schedulesFactory;
