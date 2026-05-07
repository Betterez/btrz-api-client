

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /labels (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} LabelsQuery
 * @property {string} [name] - The name of the label to search for; omit to return all
 * @property {number} [page] - Page number; omit for first page
 */

/**
 * Factory for labels API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function labelsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /labels - list labels (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {LabelsQuery} [opts.query] - Query params (name, page)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ labels: Object[], count: number, next?: string, previous?: string }>>}
   * @throws 401; 500.
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/labels", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /labels/:labelId - get label by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.labelId - Label id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ label: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_LABEL_ID; 401; 404 LABEL_NOT_FOUND; 500.
   */
  function get(_ref3) {
    const labelId = _ref3.labelId;
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client.get(`/labels/${labelId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /labels - create label.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.label - Label payload (name, description, color required; type: ticket|manifest)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ label: Object }>>}
   * @throws 400 WRONG_DATA (name/description/color required), INVALID_TYPE; 401; 500.
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const label = _ref4.label;
    const token = _ref4.token;
    const headers = _ref4.headers;

    return client({
      url: "/labels",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {label}
    });
  }

  /**
   * PUT /labels/:labelId - update label.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.labelId - Label id (24 hex characters)
   * @param {Object} opts.label - Label payload (LabelData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ label: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_TYPE, LABEL_ALREADY_USED; 401; 404 LABEL_NOT_FOUND; 500.
   */
  function update(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const token = _ref5.token;
    const labelId = _ref5.labelId;
    const label = _ref5.label;
    const headers = _ref5.headers;

    return client({
      url: `/labels/${labelId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {label}
    });
  }

  /**
   * DELETE /labels/:labelId - remove label.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.labelId - Label id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ labelId: string }>>}
   * @throws 400 LABEL_ID (invalid format), LABEL_ALREADY_USED; 401; 404 LABEL_NOT_FOUND; 500.
   */
  function remove(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const labelId = _ref6.labelId;
    const headers = _ref6.headers;

    return client({
      url: `/labels/${labelId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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

module.exports = labelsFactory;
