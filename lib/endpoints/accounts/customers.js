"use strict";

var base64 = require("base-64");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function customersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function put(_ref2) {
    var customerId = _ref2.customerId,
        customer = _ref2.customer,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken;

    return client({
      url: "/customers/" + customerId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: customer
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client({
      url: "/customers",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref4) {
    var customer = _ref4.customer,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken;

    return client({
      url: "/customer",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { customer: customer }
    });
  }

  function signIn(_ref5) {
    var email = _ref5.email,
        password = _ref5.password,
        apiKey = _ref5.apiKey;

    var encodedCredentials = base64.encode(email + ":" + password);
    var headers = {
      Authorization: "Basic " + encodedCredentials
    };
    var params = {};
    params["x-api-key"] = apiKey;
    return client({
      url: "/customers",
      method: "post",
      params: params,
      headers: headers,
      data: {}
    });
  }

  function signInCas(_ref6) {
    var service = _ref6.service,
        ticket = _ref6.ticket,
        token = _ref6.token;

    return client({
      url: "/customers/cas",
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider
      }),
      method: "post",
      data: {
        service: service,
        ticket: ticket
      }
    });
  }

  return {
    put: put,
    all: all,
    create: create,
    signIn: signIn,
    signInCas: signInCas
  };
}

module.exports = customersFactory;