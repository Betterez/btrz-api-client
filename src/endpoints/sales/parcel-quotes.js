const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function parcelQuotesFactory({client, internalAuthTokenProvider}) {
  function get({token, parcelQuoteData, jwtToken, headers}) {
    return client({
      url: "/parcel-quotes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: parcelQuoteData
    });
  }

  return { 
    get
  };
}

module.exports = parcelQuotesFactory;
