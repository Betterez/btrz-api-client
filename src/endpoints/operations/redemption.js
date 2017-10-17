const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function redemptionFactory({ client }) {

  function create({ token, jwtToken, redemption }) {
    return client({ 
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: redemption
    });
  }
  
  return {
    create
  };
}

module.exports = redemptionFactory;
