"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function networkFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var agencies = {
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/network/agencies",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    get: function get(_ref3) {
      var token = _ref3.token,
          query = _ref3.query,
          headers = _ref3.headers,
          sellerId = _ref3.sellerId;

      return client({
        url: "/network/agencies/" + sellerId,
        params: query,
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    update: function update(_ref4) {
      var jwtToken = _ref4.jwtToken,
          token = _ref4.token,
          sellerId = _ref4.sellerId,
          agency = _ref4.agency,
          headers = _ref4.headers,
          query = _ref4.query;

      return client({
        url: "/network/agencies/" + sellerId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          agency: agency
        },
        params: query
      });
    },
    create: function create(_ref5) {
      var jwtToken = _ref5.jwtToken,
          token = _ref5.token,
          agency = _ref5.agency,
          headers = _ref5.headers;

      return client({
        url: "/network/agencies",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          agency: agency
        }
      });
    }
  };

  return {
    agencies: agencies
  };
}

module.exports = networkFactory;