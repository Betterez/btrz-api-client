const { authorizationHeaders } = require("./../endpoints_helpers");

function countriesFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, query = {} }) {
    return client({
      url: "/countries",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all 
  };

}

module.exports = countriesFactory;