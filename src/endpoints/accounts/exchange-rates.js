/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

function exchangeRatesFactory({client, internalAuthTokenProvider}) {
  function allByIsoCode({token, jwtToken, isoCode, query = {}, headers}) {
    return client({
      params: query,
      url: `/exchange-rates/${isoCode}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/exchange-rates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    allByIsoCode,
    create
  };
}

module.exports = exchangeRatesFactory;
