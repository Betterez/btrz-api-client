const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for print-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, create: function, remove: function, versions: { update: function } }}
 */
function printSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /print-templates - list print templates.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query, headers}) {
    return client({
      url: "/print-templates",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function get({token, query, headers, printTemplateId}) {
    return client({
      url: `/print-templates/${printTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function update({jwtToken, token, printTemplateId, printTemplate, headers, query}) {
    return client({
      url: `/print-templates/${printTemplateId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        printTemplate
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
  function create({jwtToken, token, printTemplate, headers}) {
    return client({
      url: "/print-templates",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        printTemplate
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
  function remove({printTemplateId, token, jwtToken, headers}) {
    return client({
      url: `/print-templates/${printTemplateId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  const versions = {
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
    update({printTemplateId, token, jwtToken, headers, query, versionId}) {
      return client({
        url: `/print-templates/${printTemplateId}/versions/${versionId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    }
  };

  return {
    all,
    get,
    update,
    create,
    remove,
    versions
  };
}

module.exports = printSettingsFactory;
