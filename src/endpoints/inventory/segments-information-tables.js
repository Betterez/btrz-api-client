const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function segmentInformationTableFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, routeId, query = {}, headers}) {
    return client({
      url: `/segments-information-tables/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = segmentInformationTableFactory;
