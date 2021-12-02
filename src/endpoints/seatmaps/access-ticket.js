const { authorizationHeaders } = require("./../endpoints_helpers");

function accessTicketFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, headers}) {
    return client({
      url: "/access-ticket",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  return {
    create
  };
}

module.exports = accessTicketFactory;