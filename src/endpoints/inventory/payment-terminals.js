const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function paymentTerminalFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/payment-terminals", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({paymentTerminalId, token, headers}) {
    return client.get(`/payment-terminals/${paymentTerminalId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ jwtToken, token, paymentTerminal, headers }) {
    return client({
      url: "/payment-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        paymentTerminal
      }
    });
  }

  function remove({ jwtToken, paymentTerminalId, token, headers }) {
    return client({
      url: `/payment-terminals/${paymentTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, paymentTerminalId, paymentTerminal, headers}) {
    return client({
      url: `/payment-terminals/${paymentTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        paymentTerminal
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = paymentTerminalFactory;
