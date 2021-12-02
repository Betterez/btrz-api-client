"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function zonePriceFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/zone-prices", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var zonePriceId = _ref3.zonePriceId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/zone-prices/" + zonePriceId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        zonePrice = _ref4.zonePrice,
        headers = _ref4.headers;

    return client({
      url: "/zone-prices",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        zonePrice: zonePrice
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        zonePriceId = _ref5.zonePriceId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/zone-prices/" + zonePriceId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        zonePriceId = _ref6.zonePriceId,
        zonePrice = _ref6.zonePrice,
        headers = _ref6.headers;

    return client({
      url: "/zone-prices/" + zonePriceId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
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

module.exports = zonePriceFactory;