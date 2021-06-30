const {authorizationHeaders} = require("./../endpoints_helpers");

function bareRoutesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}}) {
    return client({
      url: "/bare-routes",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({routeId, token, query = {}}) {
    return client({
      url: `/bare-routes/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all,
    get
  };
}

module.exports = bareRoutesFactory;
