"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function peopleLookupsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/people-lookups",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getById(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        query = _ref3.query,
        headers = _ref3.headers,
        peopleLookupId = _ref3.peopleLookupId;

    return client({
      url: "/people-lookups/" + peopleLookupId,
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        peopleLookupId = _ref4.peopleLookupId,
        peopleLookup = _ref4.peopleLookup,
        headers = _ref4.headers,
        query = _ref4.query;

    return client({
      url: "/people-lookups/" + peopleLookupId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        peopleLookup: peopleLookup
      },
      params: query
    });
  }

  function create(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        peopleLookup = _ref5.peopleLookup,
        headers = _ref5.headers;

    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        peopleLookup: peopleLookup
      }
    });
  }

  function remove(_ref6) {
    var peopleLookupId = _ref6.peopleLookupId,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/people-lookups/" + peopleLookupId,
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