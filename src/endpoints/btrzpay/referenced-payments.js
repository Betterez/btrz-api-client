const {authorizationHeaders} = require("./../endpoints_helpers");

function referencedPaymentsFactory({client, internalAuthTokenProvider}) {
  function getStatus({token, jwtToken, transactionId, referenceNumber, headers}) {
    return client.get(`/referenced-payments/${transactionId}/${referenceNumber}/status`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, externalType, referenceNumber, paymentResult, headers}) {
    return client({
      url: `/referenced-payments/${externalType}/${referenceNumber}/results`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, headers}),
      data: {paymentResult}
    });
  }

  return {
    getStatus,
    update
  };
}

module.exports = referencedPaymentsFactory;
