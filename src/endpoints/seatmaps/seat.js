const { authorizationHeaders } = require("./../endpoints_helpers");

function seatFactory({ client, internalAuthTokenProvider }) {

  function update({ token, jwtToken, params, headers}) {
    return client({
      url: "/seat",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      params
    });
  }

  return {
    update
  };
}

module.exports = seatFactory;
