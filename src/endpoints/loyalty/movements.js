const { authorizationHeaders } = require("./../endpoints_helpers");

function movementsFactory({ client, internalAuthTokenProvider }) {
  function all({ token, jwtToken, programId, query = {} }) {
    return client({
      url: `/programs/${programId}/movements`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({ token, jwtToken, programId, movement, query = {} }) {
    return client({
      url: `/programs/${programId}/movements`,
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: movement
    });
  }

  const balance = {
    get({ token, jwtToken, programId, customerId, query = {} }) {
      return client({
        url: `/programs/${programId}/movements/balance/${customerId}`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
      });
    }
  };

  return {
    all,
    create,
    balance
  };

}

module.exports = movementsFactory;
