const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function serviceNumbersFactory({
  client,
  internalAuthTokenProvider
}) {
  function all({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/service-numbers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function create({
    token, jwtToken, serviceNumber, headers
  }) {
    return client({
      url: "/service-numbers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceNumber
      }
    });
  }

  function update({
    jwtToken, token, serviceNumberId, serviceNumber, headers
  }) {
    return client({
      url: `/service-numbers/${serviceNumberId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceNumber
      }
    });
  }

  function get({token, serviceNumberId, jwtToken, headers}) {
    return client({
      url: `/service-numbers/${serviceNumberId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers}),
    });
  }

  return {
    all,
    create,
    update,
    get
  };
}

module.exports = serviceNumbersFactory;
