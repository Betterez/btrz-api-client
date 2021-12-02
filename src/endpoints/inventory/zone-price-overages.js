const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function zonePriceOverageFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/zone-price-overages", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({zonePriceOverageId, token, headers}) {
    return client.get(`/zone-price-overages/${zonePriceOverageId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, zonePriceOverages, headers}) {
    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePriceOverages
      }
    });
  }

  function remove({jwtToken, zonePriceOverageId, token, headers}) {
    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, zonePriceOverageId, zonePriceOverages, headers}) {
    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePriceOverages
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
