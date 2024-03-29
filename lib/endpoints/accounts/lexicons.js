"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function lexiconsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        context = _ref2.context,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "lexicons/buscompany",
      params: queryObj,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        lexiconEntries = _ref3.lexiconEntries,
        headers = _ref3.headers;

    return client({
      url: "/lexicons",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        entries: lexiconEntries
      }
    });
  }

  function createOrUpdateMany(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        entries = _ref4.entries,
        headers = _ref4.headers;

    return client({
      url: "/lexicons",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        entries: entries
      }
    });
  }

  function updateMany(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        updates = _ref5.updates,
        headers = _ref5.headers;

    return client({
      url: "/lexicons",
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        updates: updates
      }
    });
  }

  return {
    all: all,
    create: create,
    createOrUpdateMany: createOrUpdateMany,
    updateMany: updateMany
  };
}

module.exports = lexiconsFactory;