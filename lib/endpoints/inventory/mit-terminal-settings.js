"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function mitTerminalFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/mit-terminals-settings", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var id = _ref3.id,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client.get("/mit-terminals-settings/" + id, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        mitTerminalSettings = _ref4.mitTerminalSettings,
        headers = _ref4.headers;

    return client({
      url: "/mit-terminals-settings",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        mitTerminalSettings: mitTerminalSettings
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/mit-terminals-settings/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        id = _ref6.id,
        mitTerminalSettings = _ref6.mitTerminalSettings,
        headers = _ref6.headers;

    return client({
      url: "/mit-terminals-settings/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        mitTerminalSettings: mitTerminalSettings
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

module.exports = mitTerminalFactory;