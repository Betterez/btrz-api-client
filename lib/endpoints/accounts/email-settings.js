"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function emailSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      params: query,
      url: "/email-settings",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }
  function getByEmail(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        email = _ref3.email,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      params: query,
      url: "/email-settings/" + email,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var data = _ref4.data,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/email-settings",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        email = _ref5.email,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/email-settings/" + email,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function remove(_ref6) {
    var email = _ref6.email,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/email-settings/" + email,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    getByEmail: getByEmail,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = emailSettingsFactory;