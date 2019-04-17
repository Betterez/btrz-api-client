const {authorizationHeaders} = require("./../endpoints_helpers");

function flexpassesEndpointsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, flexpassId, query = {}}) {
    return client({
      url: `/flexpasses/${flexpassId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = flexpassesEndpointsFactory;
