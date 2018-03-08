const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function printedTicketsFactory({ client, internalAuthTokenProvider }) {

  function get({ token, trxId }) {
    return client({
      url: "/printed-tickets",
      params: {trxId},
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    get
  };
}

module.exports = printedTicketsFactory;