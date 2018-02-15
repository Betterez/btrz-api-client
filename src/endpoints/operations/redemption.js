const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function redemptionFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, redemption }) {
    return client({ 
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: redemption
    });
  }
  
  return {
    create
  };
}

module.exports = redemptionFactory;
