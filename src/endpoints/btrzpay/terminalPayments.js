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

  const webhooks = {
    getnet({data, providerId, headers = {}, token, jwtToken}) {
      const _headers = token && jwtToken ?
        authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}) :
        headers;

      return client({
        url: `/terminal-payments/webhooks/getnet/${providerId}`,
        method: "post",
        headers: _headers,
        data
      });
    }
  };

  return {
    mit,
    webhooks
  };
}

module.exports = terminalPaymentsFactory;
