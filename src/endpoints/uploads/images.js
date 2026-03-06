/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for upload images API (btrz-api-uploads).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function imagesFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /images - upload image.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {import("form-data")} opts.formData - Form data with image
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, formData, headers}) {
    // Only required to support integration tests
    const formHeaders = typeof formData.getHeaders === "function" ? formData.getHeaders() : {};

    return client({
      url: "/images",
      method: "post",
      headers: {
        ...authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        ...formHeaders
      },
      data: formData
    });
  }

  return {
    create
  };
}

module.exports = imagesFactory;
