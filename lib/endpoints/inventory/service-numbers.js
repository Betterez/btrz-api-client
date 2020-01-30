"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function serviceNumbersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/service-numbers",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        serviceNumber = _ref3.serviceNumber;

    return client({
      url: "/service-numbers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        serviceNumber: serviceNumber
      }
    });
  }

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        serviceNumberId = _ref4.serviceNumberId,
        serviceNumber = _ref4.serviceNumber;

    return client({
      url: "/service-numbers/" + serviceNumberId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        serviceNumber: serviceNumber
      }
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        serviceNumberId = _ref5.serviceNumberId,
        jwtToken = _ref5.jwtToken;

    return client({
      url: "/service-numbers/" + serviceNumberId,
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

module.exports = serviceNumbersFactory;