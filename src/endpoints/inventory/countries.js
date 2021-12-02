const { authorizationHeaders } = require("./../endpoints_helpers");

function countriesFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, query = {}, headers }) {
    return client({
      url: "/countries",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return { 
    all 
  };

}

module.exports = countriesFactory;