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

  const defaultUsers = {
    create({token, jwtToken, accountId, data, headers}) {
      return client({
        url: `/accounts/${accountId}/default-users`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    get,
    defaultUsers
  };
}

module.exports = accountsFactory;
