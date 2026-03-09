const {authorizationHeaders} = require("../endpoints_helpers.js");

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
function labelsFactory({client, internalAuthTokenProvider}) {
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
  function all({token, jwtToken, query = {}, headers}) {
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
  function get({labelId, token, jwtToken, query = {}, headers}) {
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
  function create({jwtToken, label, token, headers}) {
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
  function update({jwtToken, token, labelId, label, headers}) {
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
  function remove({jwtToken, token, labelId, headers}) {
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
