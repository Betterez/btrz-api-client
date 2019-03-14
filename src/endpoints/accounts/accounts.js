const { authorizationHeaders } = require("./../endpoints_helpers");

function accountsFactory({client, internalAuthTokenProvider}) {

  function get({ jwtToken, accountId }) {
    return client({
      url: `/accounts/${accountId}`,
      headers: authorizationHeaders({jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get,
  };
}

module.exports = accountsFactory;