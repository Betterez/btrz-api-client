const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function serviceNumbersFactory({
  client,
  internalAuthTokenProvider
}) {
  function all({
    token, jwtToken, query = {}
  }) {
    return client({
      url: "/service-numbers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  function create({
    token, jwtToken, serviceNumber
  }) {
    return client({
      url: "/service-numbers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        serviceNumber
      }
    });
  }

  function update({
    jwtToken, token, serviceNumberId, serviceNumber
  }) {
    return client({
      url: `/service-numbers/${serviceNumberId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        serviceNumber
      }
    });
  }

  function get({token, serviceNumberId, jwtToken}) {
    return client({
      url: `/service-numbers/${serviceNumberId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken}),
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
