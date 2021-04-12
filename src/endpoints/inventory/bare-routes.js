const {authorizationHeaders} = require("./../endpoints_helpers");

function bareRoutesFactory({client, internalAuthTokenProvider}) {
  function get({routeId, token, query = {}}) {
    return client({
      url: `/bare-routes/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = bareRoutesFactory;
