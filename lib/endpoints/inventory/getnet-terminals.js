"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function getnetTerminalFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/getnet-terminals", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var getnetTerminalId = _ref3.getnetTerminalId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/getnet-terminals/" + getnetTerminalId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        getnetTerminal = _ref4.getnetTerminal,
        headers = _ref4.headers;

    return client({
      url: "/getnet-terminals",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        getnetTerminal: getnetTerminal
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        getnetTerminalId = _ref5.getnetTerminalId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/getnet-terminals/" + getnetTerminalId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        getnetTerminal = _ref6.getnetTerminal,
        headers = _ref6.headers;

    var getnetTerminalId = getnetTerminal._id;

    return client({
      url: "/getnet-terminals/" + getnetTerminalId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        getnetTerminal: {
          name: getnetTerminal.name,
          serialNumber: getnetTerminal.serialNumber
        }
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    remove: remove,
    update: update
  };
}

module.exports = getnetTerminalFactory;