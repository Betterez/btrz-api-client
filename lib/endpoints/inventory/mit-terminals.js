"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function mitTerminalFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/mit-terminals", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var mitTerminalId = _ref3.mitTerminalId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/mit-terminals/" + mitTerminalId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        mitTerminal = _ref4.mitTerminal,
        headers = _ref4.headers;

    return client({
      url: "/mit-terminals",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        mitTerminal: mitTerminal
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        mitTerminalId = _ref5.mitTerminalId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/mit-terminals/" + mitTerminalId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        mitTerminalId = _ref6.mitTerminalId,
        mitTerminal = _ref6.mitTerminal,
        headers = _ref6.headers;

    return client({
      url: "/mit-terminals/" + mitTerminalId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        mitTerminal: mitTerminal
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