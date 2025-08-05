const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function terminalPaymentsFactory({client, internalAuthTokenProvider}) {
  const mit = {
    update({token, jwtToken, id, payment, query = {}, headers}) {
      return client({
        url: `/terminal-payments/mit/${id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {payment}
      });
    }
  };

  return {
    mit
  };
}

module.exports = terminalPaymentsFactory;
