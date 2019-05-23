const {authorizationHeaders} = require("./../endpoints_helpers");

function referencedPaymentsFactory({client, internalAuthTokenProvider}) {
  function getStatus({token, jwtToken, transactionId, referenceNumber}) {
    return client.get(`/referenced-payments/${transactionId}/${referenceNumber}/status`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    getStatus
  };
}

module.exports = referencedPaymentsFactory;
