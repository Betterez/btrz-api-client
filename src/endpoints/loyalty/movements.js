const { authorizationHeaders } = require("./../endpoints_helpers");

function movementsFactory({ client, internalAuthTokenProvider }) {
  function all({ token, jwtToken, programId, query = {} }) {
    return client({
      url: `/programs/${programId}/movements`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({ token, jwtToken, programId, movement }) {
    return client({
      url: `/programs/${programId}/movements`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: movement
    });
  }

  return {
    all,
    create
  };

}

module.exports = movementsFactory;
