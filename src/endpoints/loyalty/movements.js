const { authorizationHeaders } = require("./../endpoints_helpers");

function movementsFactory({ client, internalAuthTokenProvider }) {
  function all({ token, jwtToken, programId, query = {}, headers }) {
    return client({
      url: `/programs/${programId}/movements`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, jwtToken, programId, movement, query = {}, headers }) {
    return client({
      url: `/programs/${programId}/movements`,
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: movement
    });
  }

  const balance = {
    get({ token, jwtToken, programId, customerId, query = {}, headers }) {
      return client({
        url: `/programs/${programId}/movements/balance/${customerId}`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
