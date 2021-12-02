const {authorizationHeaders} = require("./../endpoints_helpers");

function taxIdsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}}) {
    return client({
      url: "/tax-ids",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  return {
    all
  };
}

module.exports = taxIdsFactory;
