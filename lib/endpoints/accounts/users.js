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

  function getV2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        headers = _ref3.headers;

    return client({
      url: "/users/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function all(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      url: "/users",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function login(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/users",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  // Deprecated. Use login instead.
  function create(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        data = _ref6.data,
        headers = _ref6.headers;

    return login({ token: token, jwtToken: jwtToken, query: query, data: data, headers: headers });
  }

  function update(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        userId = _ref7.userId,
        user = _ref7.user,
        headers = _ref7.headers;

    return client({
      url: "/users/" + userId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { user: user }
    });
  }

  function createOrUpdateMany(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        users = _ref8.users,
        headers = _ref8.headers;

    return client({
      url: "/users/import",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { users: users }
    });
  }

  function impersonate(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        offlineUserId = _ref9.offlineUserId,
        headers = _ref9.headers;

    return client({
      url: "/users/impersonate",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { offlineUserId: offlineUserId }
    });
  }

  function delegation(_ref10) {
    var token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        actionName = _ref10.actionName,
        delegator = _ref10.delegator,
        headers = _ref10.headers;

    return client({
      url: "/users/delegation",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { actionName: actionName, delegator: delegator }
    });
  }

  function revokeDelegation(_ref11) {
    var token = _ref11.token,
        jwtToken = _ref11.jwtToken,
        actionName = _ref11.actionName,
        headers = _ref11.headers;

    return client({
      url: "/users/delegation",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { actionName: actionName }
    });
  }

  var sequences = {
    get: function get(_ref12) {
      var token = _ref12.token,
          jwtToken = _ref12.jwtToken,
          userId = _ref12.userId,
          sequenceId = _ref12.sequenceId,
          headers = _ref12.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    all: function all(_ref13) {
      var token = _ref13.token,
          jwtToken = _ref13.jwtToken,
          userId = _ref13.userId,
          _ref13$query = _ref13.query,
          query = _ref13$query === undefined ? {} : _ref13$query,
          headers = _ref13.headers;

      return client({
        url: "/users/" + userId + "/sequences",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref14) {
      var jwtToken = _ref14.jwtToken,
          token = _ref14.token,
          userId = _ref14.userId,
          sequence = _ref14.sequence,
          headers = _ref14.headers;

      return client({
        url: "/users/" + userId + "/sequences",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },
    update: function update(_ref15) {
      var jwtToken = _ref15.jwtToken,
          token = _ref15.token,
          userId = _ref15.userId,
          sequenceId = _ref15.sequenceId,
          sequence = _ref15.sequence,
          headers = _ref15.headers;

      return client({
        url: "/users/" + userId + "/sequences/" + sequenceId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },
    transfer: function transfer(_ref16) {
      var jwtToken = _ref16.jwtToken,
          token = _ref16.token,
          userId = _ref16.userId,
          sequenceId = _ref16.sequenceId,
          newUserId = _ref16.newUserId,
          headers = _ref16.headers;

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
    getV2: getV2,
    all: all,
    create: create,
    login: login,
    update: update,
    createOrUpdateMany: createOrUpdateMany,
    impersonate: impersonate,
    delegation: delegation,
    revokeDelegation: revokeDelegation,
    sequences: sequences
  };
}

module.exports = usersFactory;