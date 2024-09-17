"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function usersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers;

    return client({
      url: "/user/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/users",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/users",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        userId = _ref5.userId,
        user = _ref5.user,
        headers = _ref5.headers;

    return client({
      url: "/users/" + userId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { user: user }
    });
  }

  var sequences = {
    create: function create(_ref6) {
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          userId = _ref6.userId,
          sequence = _ref6.sequence,
          headers = _ref6.headers;

      return client({
        url: "/users/" + userId + "/sequences",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },
    update: function update(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          userId = _ref7.userId,
          sequenceId = _ref7.sequenceId,
          sequence = _ref7.sequence,
          headers = _ref7.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },
    transfer: function transfer(_ref8) {
      var jwtToken = _ref8.jwtToken,
          token = _ref8.token,
          userId = _ref8.userId,
          sequenceId = _ref8.sequenceId,
          newUserId = _ref8.newUserId,
          headers = _ref8.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        method: "patch",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: {
          operation: "transfer",
          newUserId: newUserId
        }
      });
    }
  };

  return {
    get: get,
    all: all,
    create: create,
    update: update,
    sequences: sequences
  };
}

module.exports = usersFactory;