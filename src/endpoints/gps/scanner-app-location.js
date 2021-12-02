const {authorizationHeaders} = require("./../endpoints_helpers.js");

//TODO: add docs function when docs published
function scannerAppLocationFactory({client}) {
  function get({token, query = {}, headers}) {
    return client({
      url: "/scanner-app-location",
      headers: authorizationHeaders({token, headers}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = scannerAppLocationFactory;
