const {authorizationHeaders} = require("./../endpoints_helpers");

function pdfsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, responseType = "json", headers}) {
    return client({
      url: "/pdfs",
      method: "get",
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    all
  };
}

module.exports = pdfsFactory;
