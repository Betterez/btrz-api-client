"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function operationMessagesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/operation-messages",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        opMsgData = _ref3.opMsgData;

    return client({
      url: "/operation-messages",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: opMsgData
    });
  }

  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        operationMessageId = _ref4.operationMessageId,
        opMsgData = _ref4.opMsgData;

    return client({
      url: "/operation-messages/" + operationMessageId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: opMsgData
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        operationMessageId = _ref5.operationMessageId;

    return client({
      url: "/operation-messages/" + operationMessageId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function remove(_ref6) {
    var jwtToken = _ref6.jwtToken,
        operationMessageId = _ref6.operationMessageId,
        token = _ref6.token;

    return client({
      url: "/operation-messages/" + operationMessageId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    get: get,
    all: all,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = operationMessagesFactory;