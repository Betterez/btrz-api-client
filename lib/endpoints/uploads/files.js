

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for upload files API (btrz-api-uploads).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ upload: function }}
 */


function filesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const formData = _ref2.formData;
    const headers = _ref2.headers;

    // Only required to support integration tests
    const formHeaders = typeof formData.getHeaders === "function" ? formData.getHeaders() : {};

    return client({
      url: "/files",
      method: "post",
      headers: _extends({}, authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}), formHeaders),
      data: formData
    });
  }

  return {
    upload
  };
}

module.exports = filesFactory;
