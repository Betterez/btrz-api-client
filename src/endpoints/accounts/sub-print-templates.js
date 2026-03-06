/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for sub-print-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function subPrintTemplatesFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /sub-print-templates - create a sub print template from a main template (body: agencyId, mainTemplateId).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.subPrintTemplate - Payload with agencyId and mainTemplateId (both ObjectIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printTemplate: object }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA / MAIN_TEMPLATE_IS_NOT_CUSTOM, 401 MAIN_TEMPLATE_ACCOUNT_MISMATCH / MAIN_TEMPLATE_NOT_FROM_PROVIDER, 404 MAIN_TEMPLATE_NOT_FOUND, 500
   */
  function create({jwtToken, token, subPrintTemplate, headers}) {
    return client({
      url: "/sub-print-templates",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        subPrintTemplate
      }
    });
  }
  return {
    create
  };
}

module.exports = subPrintTemplatesFactory;
