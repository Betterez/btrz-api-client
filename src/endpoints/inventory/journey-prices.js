const { authorizationHeaders } = require("./../endpoints_helpers");

function journeyPricesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/journey-prices",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  return {
    all,
  };
}

module.exports = journeyPricesFactory;
