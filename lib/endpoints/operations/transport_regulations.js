"use strict";

// /transport-regulations/cnrt/manifests
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function transportRegulationsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var cnrt = {
    create: function create(_ref2) {
      var data = _ref2.data,
          token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          headers = _ref2.headers;

      return client({
        url: "/transport-regulations/cnrt/manifests",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    cnrt: cnrt
  };
}

module.exports = transportRegulationsFactory;