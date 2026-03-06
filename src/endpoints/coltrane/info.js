/* eslint-disable max-len */
/**
 * Factory for Coltrane info API (btrz-api-coltrane) — service and dependency status.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
function infoFactory({client}) {
  /**
   * GET /info — get Coltrane API service status and dependency health. No authentication required.
   * @param {Object} [opts]
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ data: { status: number, services: Array<{ name: string, status: number }>, build?: string, instanceId?: string, commit?: string } }>>}
   * @throws {import("axios").AxiosError} 500 Internal server error or dependency check failure
   */
  function get({headers} = {}) {
    return client({
      url: "/info",
      headers: headers || {}
    });
  }

  return {
    get
  };
}

module.exports = infoFactory;
