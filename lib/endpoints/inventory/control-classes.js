"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function controlClassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/control-classes", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var controlClassId = _ref3.controlClassId,
        token = _ref3.token,
        headers = _ref3.headers,
        jwtToken = _ref3.jwtToken;

    return client.get("/control-classes/" + controlClassId, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        controlClass = _ref4.controlClass,
        headers = _ref4.headers;

    return client({
      url: "/control-classes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        controlClass: controlClass
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        controlClassId = _ref5.controlClassId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/control-classes/" + controlClassId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        controlClassId = _ref6.controlClassId,
        controlClass = _ref6.controlClass,
        headers = _ref6.headers;

    return client({
      url: "/control-classes/" + controlClassId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        controlClass: controlClass
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

module.exports = controlClassesFactory;