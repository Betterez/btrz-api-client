const {authorizationHeaders} = require("./../endpoints_helpers.js");

function countriesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client({
      url: "/countries",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({token, id, query = {}, headers}) {
    return client({
      url: `/countries/${id}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = countriesFactory;
