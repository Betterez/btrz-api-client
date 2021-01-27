const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationsFactory({client, internalAuthTokenProvider}) {
  function get({token, id, jwtToken}) {
    return client.get(`/applications/${id}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = applicationsFactory;
