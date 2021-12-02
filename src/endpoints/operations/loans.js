const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function loansFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/loans", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  function get({
    loanId, token, headers
  }) {
    return client.get(`/loans/${loanId}`, {
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    all,
    get
  };
}

module.exports = loansFactory;
