const { authorizationHeaders } = require("./../endpoints_helpers");

function reportTypesFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, id }) {
    return client({
      url: `/types/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function getByName({ token, jwtToken, name }) { //deprecated
    return client({
      url: `/types?name=${name}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get,
    getByName
  };
}

module.exports = reportTypesFactory;
