const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function printedTicketsFactory({
  client, internalAuthTokenProvider
}) {
  function get({
    token, jwtToken, responseType = "json", trxId, lang, date, headers
  }) {
    return client({
      url: "/printed-tickets",
      params: {trxId, lang, date},
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = printedTicketsFactory;
