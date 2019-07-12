const {authorizationHeaders} = require("./../endpoints_helpers");

function redemptionFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, redemption}) {
    return client({
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: redemption
    });
  }

  function getValidate({token, jwtToken, passId, timezone}) {
    return client({
      url: `/redemptions/validate/${passId}`,
      params: {timezone},
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    create,
    getValidate
  };
}

module.exports = redemptionFactory;
