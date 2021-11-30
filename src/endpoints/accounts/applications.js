const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationsFactory({client, internalAuthTokenProvider}) {
  function get({token, id, jwtToken, headers}) {
    return client.get(`/applications/${id}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }
  function getByName({token, appName, jwtToken, headers}) {
    return client.get(`/applications/name/${appName}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    getByName
  };
}


module.exports = applicationsFactory;
