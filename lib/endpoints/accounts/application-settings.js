"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function applicationSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        providerId = _ref2.providerId,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/application-settings/" + providerId, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function update(_ref3) {
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        id = _ref3.id,
        application = _ref3.application,
        headers = _ref3.headers;

    return client({
      url: "/application-settings/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { application: application }
    });
  }

  function remove(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        id = _ref4.id,
        headers = _ref4.headers;

    return client({
      url: "/application-settings/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function regenerateKeys(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        id = _ref5.id,
        headers = _ref5.headers;

    return client({
      url: "/application-settings/" + id + "/keys",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        application = _ref6.application,
        headers = _ref6.headers;

    return client({
      url: "/application-settings",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { application: application }
    });
  }

  return {
    get: get,
    update: update,
    remove: remove,
    regenerateKeys: regenerateKeys,
    create: create
  };
}

module.exports = applicationSettingsFactory;