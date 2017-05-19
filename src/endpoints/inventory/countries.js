const { authorizationHeaders } = require("./../endpoints_helpers");

function countriesFactory({ client }) {
  
  function all({ token, query = {} }) {
    return client({
      url: "/countries",
      params: query,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all 
  };

}

module.exports = countriesFactory;