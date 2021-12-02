const {authorizationHeaders} = require("./../endpoints_helpers");

function bareRoutesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client({
      url: "/bare-routes",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({routeId, token, query = {}, headers}) {
    return client({
      url: `/bare-routes/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = bareRoutesFactory;
