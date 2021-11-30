const { authorizationHeaders } = require("./../endpoints_helpers");

function currentShiftsFactory({client, internalAuthTokenProvider}) {

  function get({token, userId, query = {}, headers}) {
    return client.get(`/users/${userId}/current-shift`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = currentShiftsFactory;
