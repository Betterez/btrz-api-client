const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function accountsFactory({client, internalAuthTokenProvider}) {
  function get({jwtToken, accountId, headers}) {
    return client({
      url: `/accounts/${accountId}`,
      headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = accountsFactory;
