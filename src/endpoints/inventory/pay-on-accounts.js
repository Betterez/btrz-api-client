const {authorizationHeaders} = require("../endpoints_helpers.js");

function payOnAccountsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, responseType = "json", headers}) {
    return client.get("/pay-on-accounts", {
      params: query,
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = payOnAccountsFactory;
