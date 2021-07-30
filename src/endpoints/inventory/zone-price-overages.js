const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function zonePriceOverageFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {}
  }) {
    return client.get("/zone-price-overages", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({zonePriceId, token}) {
    return client.get(`/zone-price-overages/${zonePriceId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({jwtToken, token, zonePrice}) {
    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        zonePrice
      }
    });
  }

  function remove({jwtToken, zonePriceId, token}) {
    return client({
      url: `/zone-price-overages/${zonePriceId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, zonePriceId, zonePrice}) {
    return client({
      url: `/zone-price-overages/${zonePriceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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

module.exports = zonePriceOverageFactory;
