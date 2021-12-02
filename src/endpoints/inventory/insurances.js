const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function insurancesFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token, query = {}, headers
  }) {
    return client.get("/insurances", {
      params: query,
      headers: authorizationHeaders({
        token, internalAuthTokenProvider, headers
      })
    });
  }

  function get({
    token, insuranceId, headers
  }) {
    return client.get(`/insurances/${insuranceId}`, {
      headers: authorizationHeaders({
        token, internalAuthTokenProvider, headers
      })
    });
  }

  function create({
    token, insurance, jwtToken, headers
  }) {
    return client({
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        insurance
      }
    });
  }

  function update({
    token, insurance, jwtToken, insuranceId, headers
  }) {
    return client({
      url: `/insurances/${insuranceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        insurance
      }
    });
  }

  function remove({
    token, jwtToken, insuranceId, headers
  }) {
    return client({
      url: `/insurances/${insuranceId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
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