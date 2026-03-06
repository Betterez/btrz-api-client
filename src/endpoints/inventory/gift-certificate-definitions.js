const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /gift-certificate-definitions (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} GiftCertificateDefinitionsListQuery
 * @property {string[]} [channels] - Filter by channels
 * @property {string[]} [currencies] - Filter by currencies
 * @property {string} providerId - Provider id (required by API)
 */

/**
 * Factory for gift-certificate-definitions API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function giftCertificateDefinitionsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /gift-certificate-definitions - list gift certificate definitions.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {GiftCertificateDefinitionsListQuery} [opts.query] - Query params (channels, currencies, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/gift-certificate-definitions", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /gift-certificate-definitions/:giftcertificateId - get gift certificate definition by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.giftcertificateId - Gift certificate definition id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, giftcertificateId, query = {}, headers}) {
    return client({
      url: `/gift-certificate-definitions/${giftcertificateId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /gift-certificate-definitions - create gift certificate definition. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.giftcertificate - Gift certificate payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, giftcertificate, query = {}, headers}) {
    return client({
      url: "/gift-certificate-definitions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {giftcertificate}
    });
  }

  /**
   * PUT /gift-certificate-definitions/:giftcertificateId - update gift certificate definition. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.giftcertificateId - Gift certificate definition id
   * @param {Object} opts.giftcertificate - Gift certificate payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, giftcertificateId, giftcertificate, query = {}, headers}) {
    return client({
      url: `/gift-certificate-definitions/${giftcertificateId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {giftcertificate}
    });
  }

  /**
   * DELETE /gift-certificate-definitions/:giftcertificateId - remove gift certificate definition. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.giftcertificateId - Gift certificate definition id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, giftcertificateId, query = {}, headers}) {
    return client({
      url: `/gift-certificate-definitions/${giftcertificateId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = giftCertificateDefinitionsFactory;
