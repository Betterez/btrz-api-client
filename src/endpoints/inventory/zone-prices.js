const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function zonePriceFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/zone-prices", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({zonePriceId, token, headers}) {
    return client.get(`/zone-prices/${zonePriceId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, zonePrice, headers}) {
    return client({
      url: "/zone-prices",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePrice
      }
    });
  }

  function remove({jwtToken, zonePriceId, token, headers}) {
    return client({
      url: `/zone-prices/${zonePriceId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, zonePriceId, zonePrice, headers}) {
    return client({
      url: `/zone-prices/${zonePriceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePrice
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

module.exports = zonePriceFactory;
