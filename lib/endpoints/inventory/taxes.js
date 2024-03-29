"use strict";

var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function taxesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/taxes", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var taxId = _ref3.taxId,
        token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/taxes/" + taxId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        tax = _ref4.tax,
        token = _ref4.token,
        headers = _ref4.headers;

    return client({
      url: "/taxes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { tax: tax }
    });
  }

  function update(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        taxId = _ref5.taxId,
        tax = _ref5.tax,
        headers = _ref5.headers;

    return client({
      url: "/taxes/" + taxId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { tax: tax }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = taxesFactory;