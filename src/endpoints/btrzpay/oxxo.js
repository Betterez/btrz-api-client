const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function oxxoFactory({client, internalAuthTokenProvider}) {
  const token = {
    get({jwtToken, headers, internalAuthTokenProvider}) {
      return client({
        url: "/oxxo/token",
        headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const payments = {
    all({jwtToken, headers, oxxoToken, query, internalAuthTokenProvider}) {
      return client({
        url: `/oxxo/${oxxoToken}/payments`,
        params: query,
        headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
      });
    },
    update({jwtToken, headers, oxxoToken, query, referenceNumber, data, internalAuthTokenProvider}) {
      return client({
        url: `/oxxo/${oxxoToken}/payments/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
      });
    },
    reverse({token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider, oxxoToken}) {
      return client({
        url: `/oxxo/${oxxoToken}/reverse/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    token,
    payments
  };
}

module.exports = oxxoFactory;
