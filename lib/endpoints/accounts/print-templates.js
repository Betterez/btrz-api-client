

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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
 * @property {string} [agencyId] - Filter sub-templates for this agency (ObjectId)
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


function printSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /print-templates - list print templates (paginated when page is provided).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PrintTemplatesListQuery} [opts.query] - Query params (providerId, type, channel, agencyId, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printTemplates: object[], next?: string, previous?: string, totalRecords?: number, page?: number }>>}
   *   When page is used, response includes next, previous, totalRecords, page.
   * @throws {import("axios").AxiosError} 400 WRONG_DATA, INVALID_PRODUCT_ID; 401; 500
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/print-templates",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /print-templates/:printTemplateId - get a single print template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {PrintTemplateGetByIdQuery} [opts.query] - Query params (providerId, superUserId, superUserHash)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 INVALID_PRINT_TEMPLATE_ID / INVALID_PROVIDER_ID, 401, 404 PRINT_TEMPLATE_NOT_FOUND, 500
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const printTemplateId = _ref3.printTemplateId;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/print-templates/${printTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /print-templates/:printTemplateId - update a print template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {Object} opts.printTemplate - Print template payload (name, type; type-specific fields)
   * @param {Object} [opts.query] - Optional (superUserId, superUserHash)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA, type-specific; 401 NOT_SUPER_USER; 404; 500
   */
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const printTemplateId = _ref4.printTemplateId;
    const printTemplate = _ref4.printTemplate;
    const headers = _ref4.headers;
    const query = _ref4.query;

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
   * POST /print-templates - create a print template. Body: printTemplate (name, type required; type-specific fields).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.printTemplate - Print template payload (see PrintTemplatePostData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA / PRODUCT_* / INVOICE_* / META_* / TEMPLATE_*, 401 NOT_SUPER_USER, 500
   */
  function create(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const token = _ref5.token;
    const printTemplate = _ref5.printTemplate;
    const headers = _ref5.headers;

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
   * DELETE /print-templates/:printTemplateId - delete a print template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.printTemplateId - Print template id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printTemplateId: string }>>}
   * @throws {import("axios").AxiosError} 400 PRINT_TEMPLATE_ID, 401, 404 PRINT_TEMPLATE_NOT_FOUND, 500
   */
  function remove(_ref6) {
    const printTemplateId = _ref6.printTemplateId;
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;

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
     * PUT /print-templates/:printTemplateId/versions/:versionId - roll back to a saved version (versionId = zero-based index).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.printTemplateId - Print template id (ObjectId)
     * @param {string} opts.versionId - Zero-based version index (e.g. "0", "1")
     * @param {PrintTemplateVersionUpdateQuery} [opts.query] - Query params (superUserId, superUserHash)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ printTemplate: object }>>}
     * @throws {import("axios").AxiosError} 400 WRONG_DATA; 401 NOT_SUPER_USER; 404; 500
     */
    update: function update(_ref7) {
      const printTemplateId = _ref7.printTemplateId;
      const token = _ref7.token;
      const jwtToken = _ref7.jwtToken;
      const headers = _ref7.headers;
      const query = _ref7.query;
      const versionId = _ref7.versionId;

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
