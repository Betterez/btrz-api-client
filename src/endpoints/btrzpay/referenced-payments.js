const {authorizationHeaders} = require("./../endpoints_helpers");

function referencedPaymentsFactory({client, internalAuthTokenProvider}) {
  function getStatus({token, jwtToken, transactionId, referenceNumber}) {
    return client.get(`/referenced-payments/${transactionId}/${referenceNumber}/status`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({token, jwtToken, externalType, referenceNumber, paymentResult}) {
    return client({
      url: `/referenced-payments/${externalType}/${referenceNumber}/results`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: {paymentResult}
    });
  }

  return {
    getStatus,
    update
  };
}

module.exports = referencedPaymentsFactory;
