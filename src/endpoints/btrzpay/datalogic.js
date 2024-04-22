const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function datalogicFactory({client, internalAuthTokenProvider}) {
  const payments = {
    all({token, jwtToken, headers, query, internalAuthTokenProvider}) {
      return client({
        url: "/datalogic/payments",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    update({token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider}) {
      return client({
        url: `/datalogic/payments/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    payments
  };
}

module.exports = datalogicFactory;
