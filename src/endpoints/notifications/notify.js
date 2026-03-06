/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

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
function notifyTicketFactory({
  client, internalAuthTokenProvider
}) {
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
      create({token, jwtToken, email, lang, headers}) {
        return client({
          url: "/notify-child-user",
          method: "post",
          data: {
            email,
            lang
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      create({token, jwtToken, query, operation, to, ticketId, headers}) {
        return client({
          url: `/notify-tickets/${ticketId}`,
          method: "post",
          params: query,
          data: {
            to,
            operation
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      create({token, jwtToken, query, data, headers}) {
        return client({
          url: "/notify-vouchers",
          method: "post",
          params: query,
          data,
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
      create({token, jwtToken, data, headers}) {
        return client({
          url: "/notify-manifest",
          method: "post",
          data,
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    }
  };
}

module.exports = notifyTicketFactory;
