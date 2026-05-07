

/* eslint-disable max-len */
const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /email-templates (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} EmailTemplatesListQuery
 * @property {string} [providerId] - Filter by provider account (ObjectId)
 * @property {string} [type] - Filter by template type
 * @property {string} [channel] - backoffice | agency-backoffice | websales | agency-websales | any | mobileapp
 * @property {string} [sort] - relevance | natural | createdAsc | createdDesc | updatedAsc | updatedDesc
 * @property {string} [templateCollectionId] - default | custom
 * @property {string} [status] - draft | published
 * @property {string} [agencyId] - Filter sub-templates for this agency (ObjectId)
 * @property {string} [mainTemplateAccountId] - Filter by source provider (ObjectId)
 * @property {string} [lang] - ISO language code (e.g. en-us)
 * @property {number} [page] - 1-based page for pagination
 */

/**
 * Query params for GET /email-templates/:emailTemplateId (btrz-api-accounts). See get-by-id-handler getSpec().
 * @typedef {Object} EmailTemplateGetByIdQuery
 * @property {string} [providerId] - Filter by provider; template must belong to this account, current account, or be global (ObjectId)
 * @property {string} [superUserId] - Super user ID for authentication (ObjectId)
 * @property {string} [superUserHash] - Super user hash for authentication
 */

/**
 * @typedef {Object} EmailTemplatePostData
 * @property {string} name - Template name
 * @property {string} type - Template type
 * @property {string} subject - Subject line (plain text + Liquid)
 * @property {string} lang - ISO language code (e.g. en-us)
 * @property {string} htmlTemplate - HTML body (no scripts)
 * @property {string} txtTemplate - Plain text body (no HTML)
 * @property {string} [channel] - any (default) or other channel
 * @property {string} [status] - draft | published
 * @property {string} [templateCollectionId] - default | custom (required for accountId "")
 * @property {string} [accountId] - "" for global template (super user)
 * @property {Array<{ templateId: string, templateName: string }>} [attachments] - PDF template attachments (templateId: ObjectId of pdf-template; templateName: name of template)
 */

/**
 * Factory for email-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getTypes: function, all: function, get: function, create: function, update: function, remove: function, createSub: function, versions: { update: function } }}
 */


function emailTemplatesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /email-templates/types - returns available template types.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} response.data contains types array
   */
  function getTypes(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

    return client({
      url: "/email-templates/types",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /email-templates - list email templates (paginated when page is provided).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {EmailTemplatesListQuery} [opts.query] - Query params (providerId, type, channel, sort, status, lang, page, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplates: Array<object>, next?: string, previous?: string, totalRecords?: number, page?: number }>>}
   */
  function all(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: "/email-templates",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /email-templates/:emailTemplateId - get a single email template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.emailTemplateId - Template id (ObjectId)
   * @param {EmailTemplateGetByIdQuery} [opts.query] - Query params (providerId, superUserId, superUserHash)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplate: object }>>}
   */
  function get(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const emailTemplateId = _ref4.emailTemplateId;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const headers = _ref4.headers;

    return client({
      url: `/email-templates/${emailTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /email-templates - create an email template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {EmailTemplatePostData} opts.data - Template payload (name, type, subject, lang, htmlTemplate, txtTemplate required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplate: object }>>}
   */
  function create(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const data = _ref5.data;
    const headers = _ref5.headers;

    return client({
      url: "/email-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /email-templates/:emailTemplateId - update an email template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.emailTemplateId - Template id (ObjectId)
   * @param {Partial<EmailTemplatePostData>} opts.data - Fields to update (lang is read-only)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplate: object }>>}
   */
  function update(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const emailTemplateId = _ref6.emailTemplateId;
    const data = _ref6.data;
    const headers = _ref6.headers;

    return client({
      url: `/email-templates/${emailTemplateId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /email-templates/:emailTemplateId - delete an email template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.emailTemplateId - Template id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref7) {
    const token = _ref7.token;
    const jwtToken = _ref7.jwtToken;
    const emailTemplateId = _ref7.emailTemplateId;
    const headers = _ref7.headers;

    return client({
      url: `/email-templates/${emailTemplateId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /sub-email-templates - create a sub (agency) email template linked to a main template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.mainTemplateId - Main template id (ObjectId)
   * @param {string} opts.agencyId - Agency id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 validation (WRONG_DATA, MAIN_TEMPLATE_IS_NOT_CUSTOM), 401 (MAIN_TEMPLATE_ACCOUNT_MISMATCH, MAIN_TEMPLATE_NOT_FROM_PROVIDER), 404 MAIN_TEMPLATE_NOT_FOUND, 500
   */
  function createSub(_ref8) {
    const token = _ref8.token;
    const jwtToken = _ref8.jwtToken;
    const mainTemplateId = _ref8.mainTemplateId;
    const agencyId = _ref8.agencyId;
    const headers = _ref8.headers;

    return client({
      url: "/sub-email-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {mainTemplateId, agencyId}
    });
  }

  const versions = {
    /**
     * PUT /email-templates/:emailTemplateId/versions/:versionId - roll back template to a saved version (versionId is zero-based index in versions array).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.emailTemplateId - Template id (ObjectId)
     * @param {string} opts.versionId - Zero-based version index (e.g. "0", "1")
     * @param {Object} [opts.query] - Optional query (superUserId, superUserHash for default templates)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ emailTemplate: object }>>}
     * @throws {import("axios").AxiosError} 400 WRONG_DATA, 401 NOT_SUPER_USER, 404 EMAIL_TEMPLATE_NOT_FOUND / EMAIL_TEMPLATE_VERSION_NOT_FOUND, 500
     */
    update: function update(_ref9) {
      const token = _ref9.token;
      const jwtToken = _ref9.jwtToken;
      const emailTemplateId = _ref9.emailTemplateId;
      const versionId = _ref9.versionId;
      const _ref9$query = _ref9.query;
      const query = _ref9$query === undefined ? {} : _ref9$query;
      const headers = _ref9.headers;

      return client({
        url: `/email-templates/${emailTemplateId}/versions/${versionId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    }
  };

  return {
    getTypes,
    all,
    get,
    create,
    update,
    remove,
    createSub,
    versions
  };
}

module.exports = emailTemplatesFactory;
