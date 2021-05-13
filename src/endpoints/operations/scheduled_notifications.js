const {authorizationHeaders} = require("./../endpoints_helpers");

function scheduledNotificationsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query}) {
    return client({
      url: "/scheduled-notifications",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }


  return {
    all
  };
}

module.exports = scheduledNotificationsFactory;
