/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /sms-templates (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} SmsTemplatesListQuery
 * @property {string} [providerId] - Filter by provider account (ObjectId)
 * @property {string} [type] - Filter by template type
 * @property {string} [channel] - backoffice | agency-backoffice | websales | agency-websales | any
 * @property {string} [sort] - relevance | natural | createdAsc | createdDesc | updatedAsc | updatedDesc
 * @property {string} [templateCollectionId] - default | custom
 * @property {string} [status] - draft | published
 * @property {string} [agencyId] - Filter sub-templates for this agency (ObjectId)
 * @property {string} [mainTemplateAccountId] - Filter by source provider (ObjectId)
 * @property {string} [lang] - ISO language code (e.g. en-us)
 * @property {number} [page] - 1-based page for pagination
 */

/**
 * @typedef {Object} SmsTemplateAttachmentItem
 * @property {string} templateId - ObjectId of the PDF template
 * @property {string} templateName - Name of the PDF template
 */

/**
 * Query params for GET /sms-templates/:smsTemplateId (btrz-api-accounts). See get-by-id-handler getSpec().
 * @typedef {Object} SmsTemplateGetByIdQuery
 * @property {string} [providerId] - Filter by provider; template must belong to this account, current, or global (ObjectId)
 * @property {string} [superUserId] - Super user ID for authentication (ObjectId)
 * @property {string} [superUserHash] - Super user hash for authentication
 */

/**
 * Query params for PUT /sms-templates/:smsTemplateId/versions/:versionId (btrz-api-accounts). See put-version-handler getSpec().
 * @typedef {Object} SmsTemplateVersionUpdateQuery
 * @property {string} [superUserId] - Super user ID (ObjectId)
 * @property {string} [superUserHash] - Super user hash for authentication
 */

/**
 * Factory for sms-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getTypes: function, all: function, get: function, create: function, update: function, remove: function, createSub: function, versions: { update: function } }}
 */
function smsTemplatesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /sms-templates/types - returns available template types.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ types: string[] }>>}
   * @throws {import("axios").AxiosError} 401, 500
   */
  function getTypes({token, jwtToken, headers}) {
    return client({
      url: "/sms-templates/types",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /sms-templates - list SMS templates (paginated when page is provided).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SmsTemplatesListQuery} [opts.query] - Query params (providerId, type, channel, sort, agencyId, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplates: object[], next?: string, previous?: string, totalRecords?: number, page?: number }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA, 401, 500
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/sms-templates",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /sms-templates/:smsTemplateId - get a single SMS template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.smsTemplateId - Template id (ObjectId)
   * @param {SmsTemplateGetByIdQuery} [opts.query] - Query params (providerId, superUserId, superUserHash)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 INVALID_SMS_TEMPLATE_ID / INVALID_PROVIDER_ID, 401, 404 SMS_TEMPLATE_NOT_FOUND, 500
   */
  function get({token, jwtToken, smsTemplateId, query = {}, headers}) {
    return client({
      url: `/sms-templates/${smsTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /sms-templates - create an SMS template. Body: smsTemplate (name, type, lang, txtTemplate required).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body (smsTemplate or root with name, type, lang, txtTemplate)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA / TEMPLATE_* / LANG_* / TXT_TEMPLATE_REQUIRED, 401 NOT_SUPER_USER, 500
   */
  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/sms-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /sms-templates/:smsTemplateId - update an SMS template. Body: smsTemplate (name, type, txtTemplate required; lang read-only). Optional: attachments (array of SmsTemplateAttachmentItem).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.smsTemplateId - Template id (ObjectId)
   * @param {Object} opts.data - Request body (smsTemplate or root; may include attachments)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA / TEMPLATE_* / TXT_TEMPLATE_REQUIRED, 401 NOT_SUPER_USER, 404 SMS_TEMPLATE_NOT_FOUND, 500
   */
  function update({token, jwtToken, smsTemplateId, data, headers}) {
    return client({
      url: `/sms-templates/${smsTemplateId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /sms-templates/:smsTemplateId - delete an SMS template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.smsTemplateId - Template id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplateId: string }>>}
   * @throws {import("axios").AxiosError} 400 SMS_TEMPLATE_ID, 401, 404 SMS_TEMPLATE_NOT_FOUND, 500
   */
  function remove({token, jwtToken, smsTemplateId, headers}) {
    return client({
      url: `/sms-templates/${smsTemplateId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /sub-sms-templates - create a sub SMS template from a main template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.mainTemplateId - Main template id (ObjectId)
   * @param {string} opts.agencyId - Agency id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA / MAIN_TEMPLATE_IS_NOT_CUSTOM, 401 MAIN_TEMPLATE_ACCOUNT_MISMATCH / MAIN_TEMPLATE_NOT_FROM_PROVIDER, 404 MAIN_TEMPLATE_NOT_FOUND, 500
   */
  function createSub({token, jwtToken, mainTemplateId, agencyId, headers}) {
    return client({
      url: "/sub-sms-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {mainTemplateId, agencyId}
    });
  }

  const versions = {
    /**
     * PUT /sms-templates/:smsTemplateId/versions/:versionId - roll back SMS template to a saved version (versionId = zero-based index).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.smsTemplateId - Template id (ObjectId)
     * @param {string} opts.versionId - Zero-based version index (e.g. "0", "1")
     * @param {SmsTemplateVersionUpdateQuery} [opts.query] - Query params (superUserId, superUserHash for default templates)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ smsTemplate: object }>>}
     * @throws {import("axios").AxiosError} 400 WRONG_DATA, 401 NOT_SUPER_USER, 404 SMS_TEMPLATE_NOT_FOUND / SMS_TEMPLATE_VERSION_NOT_FOUND, 500
     */
    update({token, jwtToken, smsTemplateId, versionId, query = {}, headers}) {
      return client({
        url: `/sms-templates/${smsTemplateId}/versions/${versionId}`,
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

module.exports = smsTemplatesFactory;
