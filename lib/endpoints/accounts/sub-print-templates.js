"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function subPrintTemplatesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        subPrintTemplate = _ref2.subPrintTemplate,
        headers = _ref2.headers;

    return client({
      url: "/sub-print-templates",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        subPrintTemplate: subPrintTemplate
      }
    });
  }
  return {
    create: create
  };
}

module.exports = subPrintTemplatesFactory;