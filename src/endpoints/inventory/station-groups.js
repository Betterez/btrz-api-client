const { authorizationHeaders } = require("./../endpoints_helpers");

function stationGroupsFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {}, headers }) {
    return client({
      url: "/station-groups",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers}),
    });
  }

  return {
    all
  };
}

module.exports = stationGroupsFactory;
