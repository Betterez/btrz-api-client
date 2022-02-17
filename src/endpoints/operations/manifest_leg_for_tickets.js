const { authorizationHeaders } = require("../endpoints_helpers");

function manifestLegForTicketsFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, ticketId, params, headers}) {
    return client({
      url: `/manifest-leg-for-tickets/${ticketId}`,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      params
    });
  }

  return {
    get
  };
}

module.exports = manifestLegForTicketsFactory;
