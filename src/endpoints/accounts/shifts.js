const { authorizationHeaders } = require("./../endpoints_helpers");

function shiftsFactory({client, internalAuthTokenProvider}) {

  function get({ token, userId }) {
    return client.get(`/shift/user/${userId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    get
  };

}

module.exports = shiftsFactory;
