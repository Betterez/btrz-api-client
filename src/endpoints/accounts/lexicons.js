const { authorizationHeaders } = require("./../endpoints_helpers");

function lexiconsFactory({ client }) {
  
  function all({ token, context }) {

    return client({
      url: `lexicons/buscompany`,
      params: { context },
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all 
  };

}

module.exports = lexiconsFactory;