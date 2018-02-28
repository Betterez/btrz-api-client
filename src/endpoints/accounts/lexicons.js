const { authorizationHeaders } = require("./../endpoints_helpers");

function lexiconsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, context, query = {} }) {
    const queryObj = Object.assign({}, query, {context});


    return client({
      url: `lexicons/buscompany`,
      params: queryObj,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all 
  };

}

module.exports = lexiconsFactory;