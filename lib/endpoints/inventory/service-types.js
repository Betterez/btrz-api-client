"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function serviceTypesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/service-types", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var serviceTypeId = _ref3.serviceTypeId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/service-types/" + serviceTypeId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        serviceType = _ref4.serviceType,
        headers = _ref4.headers;

    return client({
      url: "/service-types",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        serviceType: serviceType
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        serviceTypeId = _ref5.serviceTypeId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/service-types/" + serviceTypeId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        serviceTypeId = _ref6.serviceTypeId,
        serviceType = _ref6.serviceType,
        headers = _ref6.headers;

    return client({
      url: "/service-types/" + serviceTypeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        serviceType: serviceType
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

module.exports = serviceTypesFactory;