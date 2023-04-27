"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function providersSequencesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        invoiceProviderId = _ref2.invoiceProviderId,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/providers/" + invoiceProviderId + "/sequences",
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        invoiceProviderId = _ref3.invoiceProviderId,
        invoiceProviderSequenceId = _ref3.invoiceProviderSequenceId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/providers/" + invoiceProviderId + "/sequences/" + invoiceProviderSequenceId,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function remove(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        invoiceProviderId = _ref4.invoiceProviderId,
        id = _ref4.id,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      url: "/providers/" + invoiceProviderId + "/sequences/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function create(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        invoiceProviderId = _ref5.invoiceProviderId,
        data = _ref5.data,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        headers = _ref5.headers;

    return client({
      url: "/providers/" + invoiceProviderId + "/sequences",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        invoiceProviderId = _ref6.invoiceProviderId,
        invoiceProviderSequenceId = _ref6.invoiceProviderSequenceId,
        data = _ref6.data,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        headers = _ref6.headers;

    return client({
      url: "/providers/" + invoiceProviderId + "/sequences/" + invoiceProviderSequenceId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  return {
    all: all,
    get: get,
    remove: remove,
    create: create,
    update: update
  };
}

module.exports = providersSequencesFactory;