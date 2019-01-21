const { authorizationHeaders } = require("./../endpoints_helpers");

function currentShiftsFactory({client, internalAuthTokenProvider}) {

  function get({ token, userId }) {
    return client.get(`/users/${userId}/current-shift`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = currentShiftsFactory;
