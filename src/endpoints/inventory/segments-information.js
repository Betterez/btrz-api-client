const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /segments-information (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} SegmentsInformationQuery
 * @property {string} [originId] - Filter by origin ID (ObjectId format)
 * @property {string} [destinationId] - Filter by destination ID (ObjectId format)
 */

/**
 * Factory for segments-information API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function segmentsInformationFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /segments-information - list segments information.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SegmentsInformationQuery} [opts.query] - Query params (originId, destinationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/segments-information", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /segments-information/:segmentInformationId - get segment information by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.segmentInformationId - Segment information id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({segmentInformationId, token, headers, jwtToken}) {
    return client.get(`/segments-information/${segmentInformationId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /segments-information - create segment information.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.segmentInformation - Segment information payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, segmentInformation, headers}) {
    return client({
      url: "/segments-information",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        segmentInformation
      }
    });
  }

  /**
   * DELETE /segments-information/:segmentInformationId - remove segment information.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.segmentInformationId - Segment information id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, segmentInformationId, token, headers}) {
    return client({
      url: `/segments-information/${segmentInformationId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /segments-information/:segmentInformationId - update segment information.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.segmentInformationId - Segment information id
   * @param {Object} opts.segmentInformation - Segment information payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, segmentInformationId, segmentInformation, headers}) {
    return client({
      url: `/segments-information/${segmentInformationId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        segmentInformation
      }
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

module.exports = segmentsInformationFactory;
