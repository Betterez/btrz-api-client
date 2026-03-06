"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for POST /notify-tickets/:ticketId (btrz-api-notifications). See post-notify-tickets-by-id-handler getSpec().
 * @typedef {Object} NotifyTicketsPostQuery
 * @property {string} [channel] - backoffice | agency-backoffice | websales | agency-websales (default websales)
 * @property {string} [templateCollectionId] - default | epsontmt88v | zebralp2844 | zebragx420t
 * @property {string} [consumer] - printer | attachment
 * @property {string} [lang] - Valid language (default en-us)
 * @property {string} [humanDate] - "mm" | "dd" (default "mm")
 */

/**
 * Query params for POST /notify-vouchers (btrz-api-notifications). See post-notify-vouchers-handler getSpec().
 * @typedef {Object} NotifyVouchersPostQuery
 * @property {string} [channel] - backoffice | agency-backoffice | websales | agency-websales (default websales)
 * @property {string} [templateCollectionId] - default | epsontmt88v | zebralp2844 | zebragx420t
 * @property {string} [consumer] - printer | attachment
 * @property {string} [lang] - Valid language (default en-us)
 * @property {string} [humanDate] - "mm" | "dd" (default "mm")
 */

/**
 * Factory for notify (child users, tickets, vouchers, manifest) API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ childUsers: { create: function }, tickets: { create: function }, vouchers: { create: function }, manifest: { create: function } }}
 */


function notifyTicketFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    childUsers: {
      /**
       * POST /notify-child-user - notify a child user (e.g. email with lang).
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {string} opts.email - Recipient email
       * @param {string} opts.lang - Language code
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create: function create(_ref2) {
        var token = _ref2.token,
            jwtToken = _ref2.jwtToken,
            email = _ref2.email,
            lang = _ref2.lang,
            headers = _ref2.headers;

        return client({
          url: "/notify-child-user",
          method: "post",
          data: {
            email: email,
            lang: lang
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    },
    tickets: {
      /**
       * POST /notify-tickets/:ticketId - send ticket notification (to, operation).
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {NotifyTicketsPostQuery} [opts.query] - Query params (all optional)
       * @param {string} opts.operation - Notification operation
       * @param {string} opts.to - Recipient (e.g. email)
       * @param {string} opts.ticketId - Ticket id
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create: function create(_ref3) {
        var token = _ref3.token,
            jwtToken = _ref3.jwtToken,
            query = _ref3.query,
            operation = _ref3.operation,
            to = _ref3.to,
            ticketId = _ref3.ticketId,
            headers = _ref3.headers;

        return client({
          url: "/notify-tickets/" + ticketId,
          method: "post",
          params: query,
          data: {
            to: to,
            operation: operation
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    },
    vouchers: {
      /**
       * POST /notify-vouchers - send voucher notification.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {NotifyVouchersPostQuery} [opts.query] - Query params (all optional)
       * @param {Object} opts.data - Request body (vouchersIds)
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create: function create(_ref4) {
        var token = _ref4.token,
            jwtToken = _ref4.jwtToken,
            query = _ref4.query,
            data = _ref4.data,
            headers = _ref4.headers;

        return client({
          url: "/notify-vouchers",
          method: "post",
          params: query,
          data: data,
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    },
    manifest: {
      /**
       * POST /notify-manifest - send manifest notification.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} opts.data - Request body
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create: function create(_ref5) {
        var token = _ref5.token,
            jwtToken = _ref5.jwtToken,
            data = _ref5.data,
            headers = _ref5.headers;

        return client({
          url: "/notify-manifest",
          method: "post",
          data: data,
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    }
  };
}

module.exports = notifyTicketFactory;