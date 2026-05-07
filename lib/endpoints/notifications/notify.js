

/* eslint-disable max-len */
const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Request body for POST /notify/email (btrz-api-notifications). See post-notify-email-handler getSpec() and NotifyEmailPostData.
 * @typedef {Object} NotifyEmailByTypePostData
 * @property {string} type - Document/template type (e.g. product, voucher, order, transaction)
 * @property {string} itemId - ObjectId of the item (24-char hex)
 * @property {string} [to] - Recipient email (optional; derived from item when omitted)
 * @property {string} [lang] - ISO language code (e.g. en-us)
 * @property {string} [channel] - Channel filter for template selection
 * @property {string} [family] - Required when type is 'product'. One of: ticket, reservation, paid in, paid out, parcel, flexpass, bundle
 * @property {string} [humanDate] - "mm" | "dd"
 */

/**
 * Request body for POST /notify/sms (btrz-api-notifications). See post-notify-sms-handler getSpec() and NotifySmsPostData.
 * @typedef {Object} NotifySmsByTypePostData
 * @property {string} type - Document/template type (e.g. product, voucher, order)
 * @property {string} itemId - ObjectId of the item (24-char hex)
 * @property {string} [to] - Recipient phone (E.164). Optional; derived from item when omitted
 * @property {string} [lang] - ISO language code
 * @property {string} [channel] - Channel filter for template selection
 * @property {string} [family] - Required when type is 'product'. One of: ticket, reservation, paid in, paid out, parcel, flexpass, bundle
 * @property {string} [humanDate] - "mm" | "dd"
 */

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
 * @returns {{ childUsers: { create: function }, tickets: { create: function }, vouchers: { create: function }, manifest: { create: function }, emailByType: { create: function }, smsByType: { create: function } }}
 */


function notifyTicketFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    emailByType: {
      /**
       * POST /notify/email - send email by document type and item ID (btrz-api-notifications).
       * Uses the most relevant published email template for the given type. Recipient can be in body or derived from item.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {NotifyEmailByTypePostData} opts.data - Request body (type, itemId; optional to, lang, channel, family, humanDate)
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{ success: boolean }>>}
       */
      create: function create(_ref2) {
        const token = _ref2.token;
        const jwtToken = _ref2.jwtToken;
        const data = _ref2.data;
        const headers = _ref2.headers;

        return client({
          url: "/notify/email",
          method: "post",
          data: data || {},
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    },
    smsByType: {
      /**
       * POST /notify/sms - send SMS by document type and item ID (btrz-api-notifications).
       * Uses the account's SMS provider (Twilio or Salesforce) and the most relevant published SMS template.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {NotifySmsByTypePostData} opts.data - Request body (type, itemId; optional to, lang, channel, family, humanDate)
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{ success: boolean }>>}
       */
      create: function create(_ref3) {
        const token = _ref3.token;
        const jwtToken = _ref3.jwtToken;
        const data = _ref3.data;
        const headers = _ref3.headers;

        return client({
          url: "/notify/sms",
          method: "post",
          data: data || {},
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    },
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
      create: function create(_ref4) {
        const token = _ref4.token;
        const jwtToken = _ref4.jwtToken;
        const email = _ref4.email;
        const lang = _ref4.lang;
        const headers = _ref4.headers;

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
      create: function create(_ref5) {
        const token = _ref5.token;
        const jwtToken = _ref5.jwtToken;
        const query = _ref5.query;
        const operation = _ref5.operation;
        const to = _ref5.to;
        const ticketId = _ref5.ticketId;
        const headers = _ref5.headers;

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
      create: function create(_ref6) {
        const token = _ref6.token;
        const jwtToken = _ref6.jwtToken;
        const query = _ref6.query;
        const data = _ref6.data;
        const headers = _ref6.headers;

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
      create: function create(_ref7) {
        const token = _ref7.token;
        const jwtToken = _ref7.jwtToken;
        const data = _ref7.data;
        const headers = _ref7.headers;

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
