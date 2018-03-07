const { authorizationHeaders } = require("./../endpoints_helpers");

function reportTypesFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, id }) {
    return client({
      url: `/types/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {      
    get
  };
}

module.exports = reportTypesFactory;
