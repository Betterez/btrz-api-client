"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function peopleLookupsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query,
        headers = _ref2.headers,
        providerId = _ref2.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/people-lookups",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getById(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        query = _ref3.query,
        headers = _ref3.headers,
        personId = _ref3.personId,
        providerId = _ref3.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;

    return client({
      url: "/people-lookups/" + personId,
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        personId = _ref4.personId,
        person = _ref4.person,
        headers = _ref4.headers,
        providerId = _ref4.providerId;

    var query = providerId ? { providerId: providerId } : {};

    return client({
      url: "/people-lookups/" + personId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: {
        person: person
      }
    });
  }

  function create(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        person = _ref5.person,
        headers = _ref5.headers,
        providerId = _ref5.providerId;

    var query = providerId ? { providerId: providerId } : {};

    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: {
        person: person
      }
    });
  }

  function remove(_ref6) {
    var personId = _ref6.personId,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/people-lookups/" + personId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    getById: getById,
    update: update,
    create: create,
    remove: remove
  };
}

module.exports = peopleLookupsFactory;