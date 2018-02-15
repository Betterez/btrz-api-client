const { authorizationHeaders } = require("./../endpoints_helpers");

function lexiconsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, context }) {

    return client({
      url: `lexicons/buscompany`,
      params: { context },
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all 
  };

}

module.exports = lexiconsFactory;