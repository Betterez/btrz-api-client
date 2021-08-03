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
    var zonePriceOverageId = _ref3.zonePriceOverageId,
        token = _ref3.token;

    return client.get("/zone-price-overages/" + zonePriceOverageId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        zonePriceOverages = _ref4.zonePriceOverages;

    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        zonePriceOverages: zonePriceOverages
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        zonePriceOverageId = _ref5.zonePriceOverageId,
        token = _ref5.token;

    return client({
      url: "/zone-price-overages/" + zonePriceOverageId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        zonePriceOverageId = _ref6.zonePriceOverageId,
        zonePriceOverages = _ref6.zonePriceOverages;

    return client({
      url: "/zone-price-overages/" + zonePriceOverageId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        zonePriceOverages: zonePriceOverages
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