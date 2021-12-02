const { authorizationHeaders } = require("./../endpoints_helpers");

function calendarEntriesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {}, headers }) {
    return client({
      url: "/calendar-entries",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
  };
}

module.exports = calendarEntriesFactory;