"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function insurancesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/insurances", {
      params: query,
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        insuranceId = _ref3.insuranceId,
        headers = _ref3.headers;

    return client.get("/insurances/" + insuranceId, {
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        insurance = _ref4.insurance,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        insurance: insurance
      }
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        insurance = _ref5.insurance,
        jwtToken = _ref5.jwtToken,
        insuranceId = _ref5.insuranceId,
        headers = _ref5.headers;

    return client({
      url: "/insurances/" + insuranceId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        insurance: insurance
      }
    });
  }

  function remove(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        insuranceId = _ref6.insuranceId,
        headers = _ref6.headers;

    return client({
      url: "/insurances/" + insuranceId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    create: create,
    get: get,
    update: update,
    remove: remove
  };
}

module.exports = insurancesFactory;