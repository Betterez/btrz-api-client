"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function fareClassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/fare-classes",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        fareClass = _ref3.fareClass,
        headers = _ref3.headers;

    return client({
      url: "/fare-classes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fareClass: fareClass }
    });
  }

  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        fareClassId = _ref4.fareClassId,
        update = _ref4.update,
        headers = _ref4.headers;

    return client({
      url: "/fare-classes/" + fareClassId,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { update: update }
    });
  }

  return {
    all: all,
    create: create,
    update: update
  };
}

module.exports = fareClassesFactory;