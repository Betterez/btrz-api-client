const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /print-templates (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} PrintTemplatesListQuery
 * @property {string} [providerId] - Filter by provider account (ObjectId)
 * @property {string} [type] - Filter by type (product, ssr, transaction, invoice, shift, manifest, order, voucher, etc.)
 * @property {string} [channel] - backoffice | agency-backoffice | websales | agency-websales
 * @property {string} [consumer] - printer | attachment
 * @property {string} [format] - default | esc
 * @property {string} [productFamily] - Only when type is product or invoice
 * @property {string} [productId] - Only when type is product or invoice (ObjectId)
 * @property {string} [sort] - relevance | natural | createdAsc | createdDesc | updatedAsc | updatedDesc
 * @property {string} [templateCollectionId] - default | epsontmt88v | zebralp2844 | zebragx420t
 * @property {string} [status] - draft | published
 * @property {string} [mainTemplateAccountId] - Filter by source provider (ObjectId)
 * @property {number} [page] - 1-based page for pagination
 */

/**
 * Query params for GET /print-templates/:printTemplateId (btrz-api-accounts). See get-by-id-handler getSpec().
 * @typedef {Object} PrintTemplateGetByIdQuery
 * @property {string} [providerId] - Filter by provider; template must belong to this account, current, or global (ObjectId)
 * @property {string} [superUserId] - Super user ID for authentication (ObjectId)
 * @property {string} [superUserHash] - Super user hash for authentication
 */

/**
 * Query params for PUT /print-templates/:printTemplateId/versions/:versionId (btrz-api-accounts). See put-version-handler getSpec().
 * @typedef {Object} PrintTemplateVersionUpdateQuery
 * @property {string} [superUserId] - Super user ID (ObjectId)
 * @property {string} [superUserHash] - Super user hash for authentication
 */

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
   * @param {PrintTemplatesListQuery} [opts.query] - Query params (providerId, type, channel, consumer, format, etc.)
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
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {PrintTemplateGetByIdQuery} [opts.query] - Query params (providerId, superUserId, superUserHash)
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
   * PUT /print-templates/:printTemplateId - update a print template. API getSpec() does not define query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {Object} opts.printTemplate - Print template payload
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
   * POST /print-templates - create a print template. API does not accept query params.
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
   * DELETE /print-templates/:printTemplateId - remove a print template. API does not accept query params.
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
     * PUT /print-templates/:printTemplateId/versions/:versionId - roll back print template to a version.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.printTemplateId - Print template id (ObjectId)
     * @param {string} opts.versionId - Zero-based version index (e.g. "0", "1")
     * @param {PrintTemplateVersionUpdateQuery} [opts.query] - Query params (superUserId, superUserHash)
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
