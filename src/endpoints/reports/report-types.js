const { authorizationHeaders } = require("./../endpoints_helpers");

function reportTypesFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, id, headers }) {
    return client({
      url: `/types/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function getByName({ token, jwtToken, name, headers }) { //deprecated
    return client({
      url: `/types?name=${name}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    getByName
  };
}

module.exports = reportTypesFactory;
