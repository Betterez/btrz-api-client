const {authorizationHeaders} = require("./../endpoints_helpers");

function redemptionFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, redemption, headers}) {
    return client({
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: redemption
    });
  }

  function getValidate({token, jwtToken, passId, timezone, headers}) {
    return client({
      url: `/redemptions/validate/${passId}`,
      params: {timezone},
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function unredeem({token, jwtToken, data, headers}) {
    return client({
      url: "/unredeem",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    create,
    getValidate,
    unredeem
  };
}

module.exports = redemptionFactory;
