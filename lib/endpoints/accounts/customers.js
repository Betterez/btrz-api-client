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
        jwtToken = _ref4.jwtToken,
        query = _ref4.query;

    return client({
      url: "/customer",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
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

  function update(_ref7) {
    var customerId = _ref7.customerId,
        token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        data = _ref7.data,
        query = _ref7.query;

    return client({
      url: "/customers/" + customerId,
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  // travellers
  function travellersAll(_ref8) {
    var customerId = _ref8.customerId,
        token = _ref8.token;

    return client({
      url: "/customers/" + customerId + "/travellers",
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function travellersGet(_ref9) {
    var customerId = _ref9.customerId,
        travellerId = _ref9.travellerId,
        token = _ref9.token;

    return client({
      url: "/customers/" + customerId + "/travellers/" + travellerId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function travellersAdd(_ref10) {
    var customerId = _ref10.customerId,
        token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        data = _ref10.data;

    return client({
      url: "/customers/" + customerId + "/travellers",
      method: "post",
      data: data,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function travellersUpdate(_ref11) {
    var customerId = _ref11.customerId,
        travellerId = _ref11.travellerId,
        token = _ref11.token,
        jwtToken = _ref11.jwtToken,
        data = _ref11.data;

    return client({
      url: "/customers/" + customerId + "/travellers/" + travellerId,
      method: "put",
      data: data,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function travellersRemove(_ref12) {
    var customerId = _ref12.customerId,
        travellerId = _ref12.travellerId,
        token = _ref12.token,
        jwtToken = _ref12.jwtToken;

    return client({
      url: "/customers/" + customerId + "/travellers/" + travellerId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    put: put,
    all: all,
    create: create,
    signIn: signIn,
    signInCas: signInCas,
    update: update,
    travellersAll: travellersAll,
    travellersGet: travellersGet,
    travellersAdd: travellersAdd,
    travellersUpdate: travellersUpdate,
    travellersRemove: travellersRemove
  };
}

module.exports = customersFactory;