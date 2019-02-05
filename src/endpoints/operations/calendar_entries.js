const { authorizationHeaders } = require("./../endpoints_helpers");

function calendarEntriesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {} }) {
    return client({
      url: "/calendar-entries",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all,
  };
}

module.exports = calendarEntriesFactory;