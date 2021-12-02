const {authorizationHeaders} = require("./../endpoints_helpers.js");

function outlookTripsFactory({client}) {
  function get({token, query = {}, headers}) {
    return client({
      url: "/outlook-trips",
      headers: authorizationHeaders({token, headers}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = outlookTripsFactory;
