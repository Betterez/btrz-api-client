const { authorizationHeaders } = require("./../endpoints_helpers");

function movementsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, jwtToken, programId, query = {} }) {
    return client({
      url: `/programs/${programId}/movements`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    all,
  };

}

module.exports = movementsFactory;