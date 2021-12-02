"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function imagesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var token = _ref2.token,
        formData = _ref2.formData,
        headers = _ref2.headers;

    // Only required to support integration tests
    var formHeaders = typeof formData.getHeaders === "function" ? formData.getHeaders() : {};

    return client({
      url: "/images",
      method: "post",
      headers: _extends({}, authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }), formHeaders),
      data: formData
    });
  }

  return {
    create: create
  };
}

module.exports = imagesFactory;