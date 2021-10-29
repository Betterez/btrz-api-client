const {authorizationHeaders} = require("./../endpoints_helpers");

function providersFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}}) {
    return client({
      url: "/pdfs",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  return {
    all
  };
}

module.exports = providersFactory;
