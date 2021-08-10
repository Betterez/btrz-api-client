const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function printersFactory({client, internalAuthTokenProvider}) {
  function all({token, query}) {
    return client({
      url: "/printers",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all
  };
}

module.exports = printersFactory;
