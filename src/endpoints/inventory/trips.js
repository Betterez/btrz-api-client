const { authorizationHeaders } = require("./../endpoints_helpers");

function tripsFactory({ client }) {
  
  function all({ token, query = {} }) {
    return client({
      url: "/trips",
      params: query,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all 
  };

}

module.exports = tripsFactory;