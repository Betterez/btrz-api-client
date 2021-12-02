"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function operatingCompaniesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/operating-companies",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        operatingCompany = _ref3.operatingCompany,
        headers = _ref3.headers;

    return client({
      url: "/operating-companies",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operatingCompany: operatingCompany }
    });
  }

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        operatingCompanyId = _ref4.operatingCompanyId,
        operatingCompany = _ref4.operatingCompany,
        headers = _ref4.headers;

    return client({
      url: "/operating-companies/" + operatingCompanyId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operatingCompany: operatingCompany }
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        operatingCompanyId = _ref5.operatingCompanyId,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/operating-companies/" + operatingCompanyId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  return {
    all: all,
    create: create,
    update: update,
    get: get
  };
}

module.exports = operatingCompaniesFactory;