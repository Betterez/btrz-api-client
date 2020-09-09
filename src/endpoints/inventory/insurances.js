const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function insurancesFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token, query = {}
  }) {
    return client.get("/insurances", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({
    token, insurance, jwtToken
  }) {
    return client({
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        insurance
      }
    });
  }

  function enabled({
    token, insurance, jwtToken
  }) {
    return client({
      url: `/insurance/${insurance._id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        insurance
      }
    });
  }

  return {
    all,
    create,
    enabled
  };
}

module.exports = insurancesFactory;