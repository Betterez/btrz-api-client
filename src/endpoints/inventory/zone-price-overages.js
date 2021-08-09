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

  function get({zonePriceOverageId, token}) {
    return client.get(`/zone-price-overages/${zonePriceOverageId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({jwtToken, token, zonePriceOverages}) {
    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        zonePriceOverages
      }
    });
  }

  function remove({jwtToken, zonePriceOverageId, token}) {
    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, zonePriceOverageId, zonePriceOverages}) {
    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
