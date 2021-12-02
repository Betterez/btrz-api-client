const {authorizationHeaders} = require("./../endpoints_helpers");

function taxIdsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/tax-ids",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    all
  };
}

module.exports = taxIdsFactory;
