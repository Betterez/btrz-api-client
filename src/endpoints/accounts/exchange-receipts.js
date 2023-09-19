/* eslint-disable import/extensions */
const {authorizationHeaders} = require("../endpoints_helpers");

function exchangeReceiptsFactory({client, internalAuthTokenProvider}) {
  function update({data, token, jwtToken, headers}) {
    return client({
      url: "/exchange-receipt-settings",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    update
  };
}

module.exports = exchangeReceiptsFactory;
