"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function insurancesFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token;

    return client("/insurances", {
      headers: authorizationHeaders({ token: token })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        insurance = _ref3.insurance,
        jwtToken = _ref3.jwtToken;

    return client({
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { insurance: insurance }
    });
  }

  function enabled(_ref4) {
    var token = _ref4.token,
        insurance = _ref4.insurance,
        jwtToken = _ref4.jwtToken;

    var one = url.resolve("/insurances/", insurance._id);

    return client({
      url: one,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { insurance: { enabled: insurance.enabled } }
    });
  }

  return {
    all: all,
    create: create,
    enabled: enabled
  };
}

module.exports = insurancesFactory;