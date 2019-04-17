const {authorizationHeaders} = require("./../endpoints_helpers");

function ticketsFactory({client, internalAuthTokenProvider}) {

  function get({token, jwtToken, id}) {
    return client({
      url: `/tickets/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function patch({token, jwtToken, id, operations, warningsEnabled}) {
    return client({
      url: `/tickets/${id}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {operations, warningsEnabled}
    });
  }

  return {
    get,
    patch
  };
}

module.exports = ticketsFactory;
