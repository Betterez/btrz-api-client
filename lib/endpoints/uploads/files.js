"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for upload files API (btrz-api-uploads).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ upload: function }}
 */


function filesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /files - upload file.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {import("form-data")} opts.formData - Form data with file
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function upload(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        formData = _ref2.formData,
        headers = _ref2.headers;

    // Only required to support integration tests
    var formHeaders = typeof formData.getHeaders === "function" ? formData.getHeaders() : {};

    return client({
      url: "/files",
      method: "post",
      headers: _extends({}, authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }), formHeaders),
      data: formData
    });
  }

  return {
    upload: upload
  };
}

module.exports = filesFactory;