const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for static QR payments API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getQrImage: function }}
 */
function staticQrFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /static-qr/busplus/qr-image - get the Busplus Galicia static QR image of the
   * logged-in Betterez user. Requires backoffice auth. Response body: { imagen, posId }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ imagen: string, posId: string }>>}
   */
  function getQrImage({token, jwtToken, headers}) {
    return client.get("/static-qr/busplus/qr-image", {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    getQrImage
  };
}

module.exports = staticQrFactory;
