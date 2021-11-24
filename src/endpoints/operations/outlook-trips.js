const {authorizationHeaders} = require("./../endpoints_helpers.js");

function outlookTripsFactory({client}) {
  function get({token, query = {}}) {
    return client({
      url: "/outlook-trips",
      headers: authorizationHeaders({token}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = outlookTripsFactory;
