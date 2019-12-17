const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function printedTicketsFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, responseType = "json", trxId, lang, date}) {
    return client({
      url: "/printed-tickets",
      params: {trxId, lang, date},
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return { 
    get
  };
}

module.exports = printedTicketsFactory;