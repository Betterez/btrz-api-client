"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /payment-methods (btrz-api-payments). See get-payment-methods getSpec().
 * @typedef {Object} PaymentMethodsListQuery
 * @property {string} [providerName] - The provider name to filter the payment methods (deprecated; use getByProviderName)
 * @property {string} [channel] - The channel to get payment methods for
 * @property {boolean} [enabled] - Filter by enabled [true, false]; if omitted returns both
 * @property {boolean} [excludePredefined] - Exclude predefined methods; default included
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers
 * @property {string} [domain] - Filter by domain
 * @property {string} [externalType] - Reference external type
 * @property {boolean} [allowToRefundTo] - Filter by ability to accept refunds [true, false]
 * @property {string} [flows] - Flows in which the method is available (comma-separated); channel required
 */

/**
 * Query params for GET /payment-methods/:paymentMethodId (btrz-api-payments). See get-payment-method getSpec().
 * @typedef {Object} PaymentMethodGetQuery
 * @property {string} [providerId] - Account provider ID; used by agencies
 */

/**
 * Factory for payment methods API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} methods all, getByProviderName, create, get, update, setToAgency,
 *   createDefaultPaymentMethods, deleteCustomersCreditCardInfo, deletePaymentMethodsDomain
 */


function paymentMethodsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /payment-methods - list payment methods.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PaymentMethodsListQuery} [opts.query] - Query params (providerName, channel, enabled, etc.)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/payment-methods", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /payment-methods?providerName= - get by provider name (deprecated). API accepts providerName only.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.providerName - Provider name
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   * @deprecated
   */
  function getByProviderName(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        providerName = _ref3.providerName,
        headers = _ref3.headers;

    return client({
      url: "/payment-methods?providerName=" + providerName,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /payment-methods - create payment method. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.paymentMethod - Payment method payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        paymentMethod = _ref4.paymentMethod,
        headers = _ref4.headers;

    return client({
      url: "/payment-methods",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { paymentMethod: paymentMethod }
    });
  }

  /**
   * GET /payment-methods/:paymentMethodId - get payment method.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {PaymentMethodGetQuery} [opts.query] - Query params (providerId for agencies)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        paymentMethodId = _ref5.paymentMethodId,
        headers = _ref5.headers,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query;

    return client.get("/payment-methods/" + paymentMethodId, {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /payment-methods/:paymentMethodId - update payment method. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {Object} opts.paymentMethod - Payment method payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        paymentMethodId = _ref6.paymentMethodId,
        paymentMethod = _ref6.paymentMethod,
        headers = _ref6.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { paymentMethod: paymentMethod }
    });
  }

  /**
   * POST /payment-methods-to-agencies - set payment methods to agency. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.agencyId - Agency id
   * @param {string} opts.providerId - Provider id
   * @param {string[]} opts.paymentMethodNames - Payment method names
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function setToAgency(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        agencyId = _ref7.agencyId,
        providerId = _ref7.providerId,
        paymentMethodNames = _ref7.paymentMethodNames,
        headers = _ref7.headers;

    return client({
      url: "/payment-methods-to-agencies",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { providerId: providerId, agencyId: agencyId, paymentMethodNames: paymentMethodNames }
    });
  }

  /**
   * POST /default-payment-methods - create default payment methods. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.accountId - Account id
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function createDefaultPaymentMethods(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        accountId = _ref8.accountId;

    return client({
      url: "/default-payment-methods",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { accountId: accountId }
    });
  }

  /**
   * DELETE /payment-methods/:paymentMethodId/customers - delete customers credit card info. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteCustomersCreditCardInfo(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        paymentMethodId = _ref9.paymentMethodId;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  /**
   * DELETE /payment-methods/domains/:domain - delete payment methods domain. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.domain - Domain
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deletePaymentMethodsDomain(_ref10) {
    var token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        domain = _ref10.domain;

    return client({
      url: "/payment-methods/domains/" + domain,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    all: all,
    getByProviderName: getByProviderName,
    create: create,
    get: get,
    setToAgency: setToAgency,
    update: update,
    createDefaultPaymentMethods: createDefaultPaymentMethods,
    deleteCustomersCreditCardInfo: deleteCustomersCreditCardInfo,
    deletePaymentMethodsDomain: deletePaymentMethodsDomain
  };
}

module.exports = paymentMethodsFactory;