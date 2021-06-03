"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function travellerCardTypesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/traveller-card-types",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        travellerCardType = _ref3.travellerCardType;

    return client({
      url: "/traveller-card-types",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { travellerCardType: travellerCardType }
    });
  }

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        travellerCardTypeId = _ref4.travellerCardTypeId,
        travellerCardType = _ref4.travellerCardType;

    return client({
      url: "/traveller-card-types/" + travellerCardTypeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { travellerCardType: travellerCardType }
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        travellerCardTypeId = _ref5.travellerCardTypeId,
        jwtToken = _ref5.jwtToken;

    return client({
      url: "/traveller-card-types/" + travellerCardTypeId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken })
    });
  }

  function remove(_ref6) {
    var token = _ref6.token,
        travellerCardTypeId = _ref6.travellerCardTypeId,
        jwtToken = _ref6.jwtToken;

    return client({
      url: "/traveller-card-types/" + travellerCardTypeId,
      method: "delete",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken })
    });
  }

  return {
    all: all,
    create: create,
    update: update,
    get: get,
    remove: remove
  };
}

module.exports = travellerCardTypesFactory;