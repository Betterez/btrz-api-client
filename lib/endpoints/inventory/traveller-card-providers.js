"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function travellerCardProvidersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/traveller-card-providers",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        travellerCardProvider = _ref3.travellerCardProvider;

    return client({
      url: "/traveller-card-providers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { travellerCardProvider: travellerCardProvider }
    });
  }

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        travellerCardProviderId = _ref4.travellerCardProviderId,
        travellerCardProvider = _ref4.travellerCardProvider;

    return client({
      url: "/traveller-card-providers/" + travellerCardProviderId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { travellerCardProvider: travellerCardProvider }
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        travellerCardProviderId = _ref5.travellerCardProviderId,
        jwtToken = _ref5.jwtToken;

    return client({
      url: "/traveller-card-providers/" + travellerCardProviderId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken })
    });
  }

  return {
    all: all,
    create: create,
    update: update,
    get: get
  };
}

module.exports = travellerCardProvidersFactory;