const { authorizationHeaders } = require("./../endpoints_helpers");

function schedulesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}}) {
    return client.get("/routes/schedules", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }


  return {
    all
  };
}

module.exports = schedulesFactory;
