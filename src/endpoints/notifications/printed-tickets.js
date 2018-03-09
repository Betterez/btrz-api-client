const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function printedTicketsFactory({ client, internalAuthTokenProvider }) {

  function get({ token, trxId, responseType = "json" }) {
    return client({
      url: "/printed-tickets",
      params: {trxId},
      responseType,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    get
  };
}

module.exports = printedTicketsFactory;