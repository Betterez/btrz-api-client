const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function loansFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token,
    query = {}
  }) {
    return client.get("/loans", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider
      })
    });
  }

  function get({
    loanId, token
  }) {
    return client.get(`/loans/${loanId}`, {
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider
      })
    });
  }

  return {
    all,
    get
  };
}

module.exports = loansFactory;
