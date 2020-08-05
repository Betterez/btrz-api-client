const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function paymentTerminalFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {}
  }) {
    return client.get("/payment-terminals", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({paymentTerminalId, token}) {
    return client.get(`/payment-terminals/${paymentTerminalId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ jwtToken, token, paymentTerminal }) {
    return client({
      url: "/payment-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        paymentTerminal
      }
    });
  }

  function remove({ jwtToken, paymentTerminalId, token }) {
    return client({
      url: `/payment-terminals/${paymentTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, paymentTerminalId, paymentTerminal}) {
    return client({
      url: `/payment-terminals/${paymentTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
