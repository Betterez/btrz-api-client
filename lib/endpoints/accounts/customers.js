"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
var base64 = require("base-64");

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /customers (btrz-api-accounts). Response is paginated (customers array + pagination).
 * @typedef {Object} CustomersQuery
 * @property {string} [customerNumber] - Filter: only that customer will be listed
 * @property {string} [externalId] - Filter: same format as when creating the customer; only that customer listed
 * @property {string} [providerIds] - Filter: provider ids to get customers from (comma-separated)
 * @property {string} [lookupSearchParams] - Lookup search in format "documentTypeId|DNI,documentNumber|1234567" (documentNumber required)
 */

/**
 * Factory for customers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ put: function, all: function, create: function, signIn: function, signInCas: function, update: function, merge: function }}
 */


function customersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * PUT /customers/:customerId - update a customer (full replace). Requires BETTEREZ_APP or CUSTOMER audience; customer token may only update own record. Side effect: may emit customer.updated webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (24-char hex ObjectId)
   * @param {Object} opts.customer - Customer payload (CustomerData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ _id: string, customerNumber: string, ... }>>}
   */
  function put(_ref2) {
    var customerId = _ref2.customerId,
        customer = _ref2.customer,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/customers/" + customerId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: customer
    });
  }

  /**
   * GET /customers - list customers (paginated). Optional filters: customerNumber, externalId, providerIds, lookupSearchParams.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CustomersQuery} [opts.query] - Query params; API expects providerIds (comma-separated). Use providerId to send a single id.
   * @param {string} [opts.providerId] - Convenience: added to query as providerId (single provider)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customers: Array<object>, total: number, ... }>>}
   */
  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers,
        providerId = _ref3.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/customers",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /customer - create a customer. Body: { customer }. If password is included, activation token is created and activation email sent. Side effect: may emit customer.created webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.customer - Customer payload (CustomerPost); email, firstName, lastName required
   * @param {Object} [opts.query] - Optional: uniqueEmail, lang, channel, platform, appVersion, appName, activateIfExists
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ _id: string, customerNumber: string, ... }>>}
   */
  function create(_ref4) {
    var customer = _ref4.customer,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        query = _ref4.query,
        headers = _ref4.headers;

    return client({
      url: "/customer",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { customer: customer },
      params: query
    });
  }

  /**
   * POST /customers - sign in with email/password (Basic auth).
   * @param {Object} opts
   * @param {string} opts.email - Customer email
   * @param {string} opts.password - Customer password
   * @param {string} opts.apiKey - API key (x-api-key)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function signIn(_ref5) {
    var email = _ref5.email,
        password = _ref5.password,
        apiKey = _ref5.apiKey;

    var encodedCredentials = base64.encode(email + ":" + password);
    var headers = {
      Authorization: "Basic " + encodedCredentials
    };
    var params = {};
    params["x-api-key"] = apiKey;
    return client({
      url: "/customers",
      method: "post",
      params: params,
      headers: headers,
      data: {}
    });
  }

  /**
   * POST /customers/cas - sign in via CAS (ticket).
   * @param {Object} opts
   * @param {string} opts.service - CAS service URL
   * @param {string} opts.ticket - CAS ticket
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function signInCas(_ref6) {
    var service = _ref6.service,
        ticket = _ref6.ticket,
        token = _ref6.token,
        headers = _ref6.headers;

    return client({
      url: "/customers/cas",
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      method: "post",
      data: {
        service: service,
        ticket: ticket
      }
    });
  }

  /**
   * PATCH /customers/:customerId - apply operations (activate, reset password, activateEmailAndPwd). Body: { operations } array of PatchCustomerOperation. Returns Customer and auth tokens. Side effect: may emit customer.updated webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (24-char hex ObjectId)
   * @param {Object} opts.data - Body: { operations } or array of { op, path, value }
   * @param {Object} [opts.query] - Optional query
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<CustomerWithAuthToken>>}
   */
  function update(_ref7) {
    var customerId = _ref7.customerId,
        token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        data = _ref7.data,
        query = _ref7.query,
        headers = _ref7.headers;

    return client({
      url: "/customers/" + customerId,
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * POST /customers/merge - merge source customers into destination. Requires BETTEREZ_APP. Side effect: emits customers.merged webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.destinationCustomerId - Destination customer id (24-char hex ObjectId)
   * @param {Array<string>} opts.sourceCustomerIds - Source customer ids (24-char hex ObjectIds)
   * @returns {Promise<import("axios").AxiosResponse<{ customerMerge: object }>>}
   */
  function merge(_ref8) {
    var destinationCustomerId = _ref8.destinationCustomerId,
        sourceCustomerIds = _ref8.sourceCustomerIds,
        jwtToken = _ref8.jwtToken,
        token = _ref8.token;

    return client({
      url: "/customers/merge",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { destinationCustomerId: destinationCustomerId, sourceCustomerIds: sourceCustomerIds }
    });
  }

  return {
    put: put,
    all: all,
    create: create,
    signIn: signIn,
    signInCas: signInCas,
    update: update,
    merge: merge
  };
}

module.exports = customersFactory;