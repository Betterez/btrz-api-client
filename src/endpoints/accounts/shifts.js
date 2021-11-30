const { authorizationHeaders } = require("./../endpoints_helpers");

function shiftsFactory({client, internalAuthTokenProvider}) {

  function get({token, userId, headers}) {
    return client.get(`/shift/user/${userId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };

}

module.exports = shiftsFactory;
