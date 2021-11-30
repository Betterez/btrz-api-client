const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client.get("/application", {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = applicationsFactory;