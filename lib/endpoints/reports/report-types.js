

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for report types API (btrz-api-reports).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, getByName: function }}
 */


function reportTypesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /types/:id - get report type by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Report type id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const id = _ref2.id;
    const headers = _ref2.headers;

    return client({
      url: `/types/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /types?name=:name - get report type by name.
   * @deprecated Prefer get by id
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.name - Report type name
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getByName(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const name = _ref3.name;
    const headers = _ref3.headers;

    return client({
      url: `/types?name=${name}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    getByName
  };
}

module.exports = reportTypesFactory;
