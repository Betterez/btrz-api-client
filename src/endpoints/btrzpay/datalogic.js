const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function datalogicFactory({client}) {
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
    },
    reverse({token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider}) {
      return client({
        url: `/datalogic/reverse/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const referenceNumber = {
    get({token, jwtToken, headers, internalAuthTokenProvider}) {
      return client({
        url: "/datalogic/reference-number",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const authCode = {
    get({token, jwtToken, headers, internalAuthTokenProvider}) {
      return client({
        url: "/datalogic/auth-code",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    payments,
    referenceNumber,
    authCode
  };
}

module.exports = datalogicFactory;
