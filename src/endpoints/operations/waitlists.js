const {authorizationHeaders} = require("../endpoints_helpers");

function waitlistsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query}) {
    return client({
      url: "/waitlists",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function get({token, jwtToken, waitlistId}) {
    console.log(`/waitlists/${waitlistId}`);
    return client({
      url: `/waitlists/${waitlistId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function remove({ token, jwtToken, waitlistId }) {
    return client({
      url: `/waitlists/${waitlistId}`,
      method: "delete",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function create({ token, jwtToken, data }) {  
    return client({
      url: "/waitlists",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
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
