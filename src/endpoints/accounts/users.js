const {authorizationHeaders} = require("./../endpoints_helpers");

function usersFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, id} = {}) {
    return client({
      url: `/user/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = usersFactory;
