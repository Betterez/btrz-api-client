const {authorizationHeaders} = require("./../endpoints_helpers");

function pdfsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, responseType = "json"}) {
    return client({
      url: "/pdfs",
      method: "get",
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  return {
    all
  };
}

module.exports = pdfsFactory;
