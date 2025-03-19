const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function financingCostsFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/financing-costs", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({
    id,
    token,
    headers,
    jwtToken,
    query = {}
  }) {
    return client.get(`/financing-costs/${id}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, financingCost, headers}) {
    return client({
      url: "/financing-costs",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        financingcost: financingCost
      }
    });
  }

  function remove({jwtToken, id, token, headers}) {
    return client({
      url: `/financing-costs/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, id, financingCost, headers}) {
    return client({
      url: `/financing-costs/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        financingcost: financingCost
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = financingCostsFactory;
