const { authorizationHeaders } = require("./../endpoints_helpers");

function shiftsFactory({client}) {

  function get({ token, userId }) {
    return client.get(`/shift/user/${userId}`, {
      headers: authorizationHeaders({token})
    });
  }

  return { 
    get
  };

}

module.exports = shiftsFactory;
