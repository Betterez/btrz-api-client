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

  function login(_ref4) {
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

  // Deprecated. Use login instead.
  function create(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        data = _ref5.data,
        headers = _ref5.headers;

    return login({ token: token, jwtToken: jwtToken, query: query, data: data, headers: headers });
  }

  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        userId = _ref6.userId,
        user = _ref6.user,
        headers = _ref6.headers;

    return client({
      url: "/users/" + userId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { user: user }
    });
  }

  function createOrUpdateMany(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        users = _ref7.users,
        headers = _ref7.headers;

    return client({
      url: "/users/import",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { users: users }
    });
  }

  function impersonate(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        offlineUserId = _ref8.offlineUserId,
        headers = _ref8.headers;

    return client({
      url: "/users/impersonate",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { offlineUserId: offlineUserId }
    });
  }

  var sequences = {
    get: function get(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          userId = _ref9.userId,
          sequenceId = _ref9.sequenceId,
          headers = _ref9.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    all: function all(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          userId = _ref10.userId,
          _ref10$query = _ref10.query,
          query = _ref10$query === undefined ? {} : _ref10$query,
          headers = _ref10.headers;

      return client({
        url: "/users/" + userId + "/sequences",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref11) {
      var jwtToken = _ref11.jwtToken,
          token = _ref11.token,
          userId = _ref11.userId,
          sequence = _ref11.sequence,
          headers = _ref11.headers;

      return client({
        url: "/users/" + userId + "/sequences",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },
    update: function update(_ref12) {
      var jwtToken = _ref12.jwtToken,
          token = _ref12.token,
          userId = _ref12.userId,
          sequenceId = _ref12.sequenceId,
          sequence = _ref12.sequence,
          headers = _ref12.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },
    transfer: function transfer(_ref13) {
      var jwtToken = _ref13.jwtToken,
          token = _ref13.token,
          userId = _ref13.userId,
          sequenceId = _ref13.sequenceId,
          newUserId = _ref13.newUserId,
          headers = _ref13.headers;

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
    login: login,
    update: update,
    createOrUpdateMany: createOrUpdateMany,
    impersonate: impersonate,
    sequences: sequences
  };
}

module.exports = usersFactory;