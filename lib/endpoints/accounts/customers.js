"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/customers/" + customerId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: customer
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers,
        providerId = _ref3.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/customers",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var customer = _ref4.customer,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        query = _ref4.query,
        headers = _ref4.headers;

    return client({
      url: "/customer",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { customer: customer },
      params: query
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
        token = _ref6.token,
        headers = _ref6.headers;

    return client({
      url: "/customers/cas",
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      method: "post",
      data: {
        service: service,
        ticket: ticket
      }
    });
  }

  function update(_ref7) {
    var customerId = _ref7.customerId,
        token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        data = _ref7.data,
        query = _ref7.query,
        headers = _ref7.headers;

    return client({
      url: "/customers/" + customerId,
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function merge(_ref8) {
    var destinationCustomerId = _ref8.destinationCustomerId,
        sourceCustomerIds = _ref8.sourceCustomerIds,
        jwtToken = _ref8.jwtToken,
        token = _ref8.token;

    return client({
      url: "/customers/merge",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { destinationCustomerId: destinationCustomerId, sourceCustomerIds: sourceCustomerIds }
    });
  }

  return {
    put: put,
    all: all,
    create: create,
    signIn: signIn,
    signInCas: signInCas,
    update: update,
    merge: merge
  };
}

module.exports = customersFactory;