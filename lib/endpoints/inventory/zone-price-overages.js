"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function zonePriceOverageFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/zone-price-overages", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function get(_ref3) {
    var zonePriceId = _ref3.zonePriceId,
        token = _ref3.token;

    return client.get("/zone-price-overages/" + zonePriceId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        zonePrice = _ref4.zonePrice;

    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        zonePrice: zonePrice
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        zonePriceId = _ref5.zonePriceId,
        token = _ref5.token;

    return client({
      url: "/zone-price-overages/" + zonePriceId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        zonePriceId = _ref6.zonePriceId,
        zonePrice = _ref6.zonePrice;

    return client({
      url: "/zone-price-overages/" + zonePriceId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        zonePrice: zonePrice
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = zonePriceOverageFactory;