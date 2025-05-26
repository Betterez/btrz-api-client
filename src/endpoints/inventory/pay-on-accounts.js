const {authorizationHeaders} = require("../endpoints_helpers.js");

function payOnAccountsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, responseType = "json", headers}) {
    return client.get("/pay-on-accounts", {
      params: query,
      responseType,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = payOnAccountsFactory;
