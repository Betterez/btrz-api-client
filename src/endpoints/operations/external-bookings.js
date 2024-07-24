const {authorizationHeaders} = require("./../endpoints_helpers.js");

function externalBookingsFactory({client, internalAuthTokenProvider}) {
  function create({jwtToken, token, externalBooking, headers, query = {}}) {
    return client({
      url: "/external-bookings",
      method: "post",
      data: externalBooking,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function remove({jwtToken, token, ticketId, headers}) {
    return client({
      url: `/external-bookings/${ticketId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create,
    remove
  };
}

module.exports = externalBookingsFactory;
