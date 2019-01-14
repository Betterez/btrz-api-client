const { authorizationHeaders } = require("./../endpoints_helpers");

function seatFactory({ client, internalAuthTokenProvider }) {

  function update({ token, jwtToken, params}) {
    return client({
      url: "/seat",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      params
    });
  }

  return {
    update
  };
}

module.exports = seatFactory;
