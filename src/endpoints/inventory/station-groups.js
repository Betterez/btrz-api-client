const { authorizationHeaders } = require("./../endpoints_helpers");

function stationGroupsFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client({
      url: "/station-groups",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider}),
    });
  }

  return {
    all
  };
}

module.exports = stationGroupsFactory;
