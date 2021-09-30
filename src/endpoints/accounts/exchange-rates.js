/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

function exchangeRatesFactory({client, internalAuthTokenProvider}) {
  function allByIsoCode({token, jwtToken, isoCode, query = {}}) {
    return client({
      params: query,
      url: `/exchange-rates/${isoCode}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({data, token, jwtToken}) {
    return client({
      url: "/exchange-rates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  return {
    allByIsoCode,
    create
  };
}

module.exports = exchangeRatesFactory;
