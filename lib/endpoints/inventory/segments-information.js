

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function segmentsInformationFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /segments-information - list segments information.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SegmentsInformationQuery} [opts.query] - Query params (originId, destinationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const segmentInformationId = _ref3.segmentInformationId;
    const token = _ref3.token;
    const headers = _ref3.headers;
    const jwtToken = _ref3.jwtToken;

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
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const segmentInformation = _ref4.segmentInformation;
    const headers = _ref4.headers;

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
  function remove(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const segmentInformationId = _ref5.segmentInformationId;
    const token = _ref5.token;
    const headers = _ref5.headers;

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
  function update(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const segmentInformationId = _ref6.segmentInformationId;
    const segmentInformation = _ref6.segmentInformation;
    const headers = _ref6.headers;

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
