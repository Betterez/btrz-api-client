const { authorizationHeaders } = require("./../endpoints_helpers");

function webhooksFactory({ client, internalAuthTokenProvider }) {

  function emit({ token, jwtToken, webhook }) {
    return client({
      url: "/emit",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      data: webhook
    });
  }

  return {
    emit
  };

}

module.exports = webhooksFactory;