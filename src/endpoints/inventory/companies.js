const { authorizationHeaders } = require("./../endpoints_helpers");

function companiesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/companies",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  return {
    all
  };
}

module.exports = companiesFactory;
