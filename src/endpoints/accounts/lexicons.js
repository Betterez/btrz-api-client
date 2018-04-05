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

  function create({ token, jwtToken, lexiconEntries }) {
    return client({
      url: "/lexicons",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { entries: lexiconEntries }
    });
  }

  return { 
    all,
    create
  };

}

module.exports = lexiconsFactory;