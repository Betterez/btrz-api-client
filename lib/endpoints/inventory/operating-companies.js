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

  var sequences = {
    create: function create(_ref6) {
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          operatingCompanyId = _ref6.operatingCompanyId,
          sequence = _ref6.sequence,
          headers = _ref6.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    },
    all: function all(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          operatingCompanyId = _ref7.operatingCompanyId,
          headers = _ref7.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences",
        method: "get",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    get: function get(_ref8) {
      var jwtToken = _ref8.jwtToken,
          token = _ref8.token,
          operatingCompanyId = _ref8.operatingCompanyId,
          sequenceId = _ref8.sequenceId,
          headers = _ref8.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences/" + sequenceId,
        method: "get",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    update: function update(_ref9) {
      var jwtToken = _ref9.jwtToken,
          token = _ref9.token,
          operatingCompanyId = _ref9.operatingCompanyId,
          sequenceId = _ref9.sequenceId,
          sequence = _ref9.sequence,
          headers = _ref9.headers;

      return client({
        url: "/operating-companies/" + operatingCompanyId + "/sequences/" + sequenceId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: sequence
      });
    }
  };

  return {
    all: all,
    create: create,
    update: update,
    get: get,
    sequences: sequences
  };
}

module.exports = operatingCompaniesFactory;