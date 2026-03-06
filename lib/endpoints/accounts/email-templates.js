"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} EmailTemplatesListQuery
 * @property {string} [providerId] - Filter by provider account (ObjectId)
 * @property {string} [type] - Filter by template type
 * @property {string} [channel] - backoffice | agency-backoffice | websales | agency-websales | any | mobileapp
 * @property {string} [sort] - relevance | natural | createdAsc | createdDesc | updatedAsc | updatedDesc
 * @property {string} [templateCollectionId] - default | custom
 * @property {string} [status] - draft | published
 * @property {string} [mainTemplateAccountId] - Filter by source provider (ObjectId)
 * @property {string} [lang] - ISO language code (e.g. en-us)
 * @property {number} [page] - 1-based page for pagination
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
 */

/**
 * Factory for email-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getTypes: function, all: function, get: function, create: function, update: function, remove: function, createSub: function, versions: { update: function } }}
 */


function emailTemplatesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /email-templates/types - returns available template types.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} response.data contains types array
   */
  function getTypes(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/email-templates/types",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/email-templates",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /email-templates/:emailTemplateId - get a single email template.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.emailTemplateId - Template id (ObjectId)
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplate: object }>>}
   */
  function get(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        emailTemplateId = _ref4.emailTemplateId,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      url: "/email-templates/" + emailTemplateId,
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/email-templates",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
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
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        emailTemplateId = _ref6.emailTemplateId,
        data = _ref6.data,
        headers = _ref6.headers;

    return client({
      url: "/email-templates/" + emailTemplateId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
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
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        emailTemplateId = _ref7.emailTemplateId,
        headers = _ref7.headers;

    return client({
      url: "/email-templates/" + emailTemplateId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function createSub(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        mainTemplateId = _ref8.mainTemplateId,
        agencyId = _ref8.agencyId,
        headers = _ref8.headers;

    return client({
      url: "/sub-email-templates",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { mainTemplateId: mainTemplateId, agencyId: agencyId }
    });
  }

  var versions = {
    /**
     * PUT /email-templates/:emailTemplateId/versions/:versionId - update a template version.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.emailTemplateId - Template id (ObjectId)
     * @param {string} opts.versionId - Version id (ObjectId)
     * @param {Object} [opts.query] - Optional query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          emailTemplateId = _ref9.emailTemplateId,
          versionId = _ref9.versionId,
          _ref9$query = _ref9.query,
          query = _ref9$query === undefined ? {} : _ref9$query,
          headers = _ref9.headers;

      return client({
        url: "/email-templates/" + emailTemplateId + "/versions/" + versionId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    }
  };

  return {
    getTypes: getTypes,
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove,
    createSub: createSub,
    versions: versions
  };
}

module.exports = emailTemplatesFactory;