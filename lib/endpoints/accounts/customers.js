"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var base64 = require("base-64");

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
   * PUT /customers/:customerId - update a customer (full replace).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (ObjectId)
   * @param {Object} opts.customer - Customer payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * GET /customers - list customers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Query params
   * @param {string} [opts.providerId] - Filter by provider id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * POST /customer - create a customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.customer - Customer payload
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * PATCH /customers/:customerId - partial update a customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (ObjectId)
   * @param {Object} opts.data - Partial customer payload
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * POST /customers/merge - merge source customers into destination.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.destinationCustomerId - Destination customer id (ObjectId)
   * @param {Array<string>} opts.sourceCustomerIds - Source customer ids (ObjectIds)
   * @returns {Promise<import("axios").AxiosResponse>}
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