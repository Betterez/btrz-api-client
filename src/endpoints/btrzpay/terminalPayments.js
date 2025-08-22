const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function terminalPaymentsFactory({client, internalAuthTokenProvider}) {
  const mit = {
    update({token, jwtToken, id, terminalPayment, query = {}, headers}) {
      return client({
        url: `/terminal-payments/mit/${id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {terminalPayment}
      });
    },
    get({token, jwtToken, id, query = {}, headers}) {
      return client.get(`/terminal-payments/mit/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    mit
  };
}

module.exports = terminalPaymentsFactory;
