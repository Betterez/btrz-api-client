"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function customContentFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/custom-content", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var customContentId = _ref3.customContentId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/custom-content/" + customContentId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        customContent = _ref4.customContent,
        headers = _ref4.headers;

    return client({
      url: "/custom-content",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        customContent: customContent
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        customContentId = _ref5.customContentId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/custom-content/" + customContentId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        customContentId = _ref6.customContentId,
        customContent = _ref6.customContent,
        headers = _ref6.headers;

    return client({
      url: "/custom-content/" + customContentId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        customContent: customContent
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

module.exports = customContentFactory;