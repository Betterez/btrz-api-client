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
      headers: authorizationHeaders({
        token, internalAuthTokenProvider
      })
    });
  }

  function get({
    token, insuranceId
  }) {
    return client.get(`/insurances/${insuranceId}`, {
      headers: authorizationHeaders({
        token, internalAuthTokenProvider
      })
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

  function update({
    token, insurance, jwtToken, insuranceId
  }) {
    return client({
      url: `/insurances/${insuranceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        insurance
      }
    });
  }

  function remove({
    token, jwtToken, insuranceId
  }) {
    return client({
      url: `/insurances/${insuranceId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider
      })
    });
  }

  return {
    all,
    create,
    get,
    update,
    remove
  };
}

module.exports = insurancesFactory;