"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function insurancesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/insurances", {
      params: query,
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider
      })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        insuranceId = _ref3.insuranceId;

    return client.get("/insurances/" + insuranceId, {
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider
      })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        insurance = _ref4.insurance,
        jwtToken = _ref4.jwtToken;

    return client({
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        insurance: insurance
      }
    });
  }

  function enabled(_ref5) {
    var token = _ref5.token,
        insurance = _ref5.insurance,
        jwtToken = _ref5.jwtToken;

    return client({
      url: "/insurances/" + insurance._id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        insurance: insurance
      }
    });
  }

  return {
    all: all,
    create: create,
    get: get,
    enabled: enabled
  };
}

module.exports = insurancesFactory;