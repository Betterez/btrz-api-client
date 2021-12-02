const {authorizationHeaders} = require("../endpoints_helpers");

function waitlistsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/waitlists",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, waitlistId, headers}) {
    return client({
      url: `/waitlists/${waitlistId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function remove({ token, jwtToken, waitlistId, headers }) {
    return client({
      url: `/waitlists/${waitlistId}`,
      method: "delete",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function create({ token, jwtToken, data, headers }) {  
    return client({
      url: "/waitlists",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      data
    });
  }

  return {
    all,
    get,
    remove,
    create
  };
}

module.exports = waitlistsFactory;
