/**
 * Factory for Ratality auth API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function authFactory({client}) {
  /**
   * POST /authenticate - authenticate.
   * @param {Object} opts
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    data,
    headers
  }) {
    return client({
      url: "/authenticate",
      method: "post",
      headers,
      data
    });
  }

  return {
    create
  };
}

module.exports = authFactory;
