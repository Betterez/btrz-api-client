const { authorizationHeaders } = require("./../endpoints_helpers");

function checkInInfoFactory({ client, internalAuthTokenProvider }) {
  function get({ token, jwtToken, id, headers, query = {} }) {
    return client({
      url: `/check-in/${id}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return { 
    get
  };
}

module.exports = checkInInfoFactory;