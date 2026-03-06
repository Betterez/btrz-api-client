"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for print-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, create: function, remove: function, versions: { update: function } }}
 */


function printSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /print-templates - list print templates.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/print-templates",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /print-templates/:printTemplateId - get a print template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.query] - Query params
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var token = _ref3.token,
        query = _ref3.query,
        headers = _ref3.headers,
        printTemplateId = _ref3.printTemplateId;

    return client({
      url: "/print-templates/" + printTemplateId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /print-templates/:printTemplateId - update a print template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {Object} opts.printTemplate - Print template payload
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        printTemplateId = _ref4.printTemplateId,
        printTemplate = _ref4.printTemplate,
        headers = _ref4.headers,
        query = _ref4.query;

    return client({
      url: "/print-templates/" + printTemplateId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        printTemplate: printTemplate
      },
      params: query
    });
  }

  /**
   * POST /print-templates - create a print template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.printTemplate - Print template payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        printTemplate = _ref5.printTemplate,
        headers = _ref5.headers;

    return client({
      url: "/print-templates",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        printTemplate: printTemplate
      }
    });
  }

  /**
   * DELETE /print-templates/:printTemplateId - remove a print template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref6) {
    var printTemplateId = _ref6.printTemplateId,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/print-templates/" + printTemplateId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  var versions = {
    /**
     * PUT /print-templates/:printTemplateId/versions/:versionId - update a print template version.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.printTemplateId - Print template id (ObjectId)
     * @param {string} opts.versionId - Version id (ObjectId)
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref7) {
      var printTemplateId = _ref7.printTemplateId,
          token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          headers = _ref7.headers,
          query = _ref7.query,
          versionId = _ref7.versionId;

      return client({
        url: "/print-templates/" + printTemplateId + "/versions/" + versionId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query
      });
    }
  };

  return {
    all: all,
    get: get,
    update: update,
    create: create,
    remove: remove,
    versions: versions
  };
}

module.exports = printSettingsFactory;