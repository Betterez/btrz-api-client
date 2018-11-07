const { authorizationHeaders } = require("./../endpoints_helpers");

function accessTicketFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken}) {
    return client({
      url: "/access-ticket",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  return {
    create
  };
}

module.exports = accessTicketFactory;