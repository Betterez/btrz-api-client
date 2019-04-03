const {authorizationHeaders} = require("./../endpoints_helpers");

function referencedPaymentsFactory({client, internalAuthTokenProvider}) {
  function getStatus({token, jwtToken, transactionId}) {
    return client.get(`/referenced-payments/${transactionId}/status`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    getStatus
  };
}

module.exports = referencedPaymentsFactory;
