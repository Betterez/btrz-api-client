const {authorizationHeaders} = require("./../endpoints_helpers");

function passengerCheckInInfoFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/passenger-check-in-info",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/passenger-check-in-info/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, id, data, headers, query}) {
    return client({
      url: `/passenger-check-in-info/${id}`,
      method: "put",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  // function remove({token, jwtToken, id, headers}) {
  //   return client({
  //     url: `/passenger-check-in-info/${id}`,
  //     method: "delete",
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
  //   });
  // }

  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/passenger-check-in-info",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    update,
    // remove,
    create
  };
}

module.exports = passengerCheckInInfoFactory;
