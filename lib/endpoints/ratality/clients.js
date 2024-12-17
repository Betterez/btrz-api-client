"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function clientsFactory(_ref) {
  var client = _ref.client,
      version = _ref.version;

  function create(_ref2) {
    var jwtToken = _ref2.jwtToken,
        data = _ref2.data,
        headers = _ref2.headers;

    return client({
      url: "/" + version + "/client",
      method: "post",
      headers: authorizationHeaders({ jwtToken: jwtToken, headers: headers }),
      data: data
    });
  }

  function get(_ref3) {
    var jwtToken = _ref3.jwtToken,
        clientId = _ref3.clientId;

    return client({
      url: "/" + version + "/client",
      method: "get",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken }))
    });
  }

  return {
    create: create,
    get: get
  };
}

module.exports = clientsFactory;