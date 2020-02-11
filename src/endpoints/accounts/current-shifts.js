const { authorizationHeaders } = require("./../endpoints_helpers");

function currentShiftsFactory({client, internalAuthTokenProvider}) {

  function get({token, userId, query = {}}) {
    return client.get(`/users/${userId}/current-shift`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = currentShiftsFactory;
