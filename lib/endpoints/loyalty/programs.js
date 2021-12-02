"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function programsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        context = _ref2.context,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "/programs",
      params: queryObj,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        program = _ref3.program,
        headers = _ref3.headers;

    return client({
      url: "/programs",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: program
    });
  }

  function put(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        programId = _ref4.programId,
        program = _ref4.program,
        headers = _ref4.headers;

    return client({
      url: "/programs/" + programId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: program
    });
  }

  return {
    all: all,
    create: create,
    put: put
  };
}

module.exports = programsFactory;