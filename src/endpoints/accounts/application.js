const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken}) {
    return client.get("/application", {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = applicationsFactory;