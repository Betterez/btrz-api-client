const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationsFactory({client, internalAuthTokenProvider}) {
  function get({token, id, jwtToken}) {
    return client.get(`/applications/${id}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }
  function getByName({token, appName, jwtToken}) {
    return client.get(`/applications/name/${appName}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get,
    getByName
  };
}


module.exports = applicationsFactory;
