const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function ordersRulesValidations({
  client,
  internalAuthTokenProvider
}) {
  function create({
    token, jwtToken, query = {}, orderRulesValidation, headers
  }) {
    return client({
      url: "/orders-rules-validations",
      method: "post",
      params: query,
      data: {
        orderRulesValidation
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }
  return {
    create
  };
}

module.exports = ordersRulesValidations;
