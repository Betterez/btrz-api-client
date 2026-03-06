/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function paymentMethodsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /payment-methods - list payment methods.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PaymentMethodsListQuery} [opts.query] - Query params (providerName, channel, enabled, etc.)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/payment-methods", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function getByProviderName({token, jwtToken, providerName, headers}) {
    return client({
      url: `/payment-methods?providerName=${providerName}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function create({token, jwtToken, paymentMethod, headers}) {
    return client({
      url: "/payment-methods",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {paymentMethod}
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
  function get({token, jwtToken, paymentMethodId, headers, query = {}}) {
    return client.get(`/payment-methods/${paymentMethodId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function update({token, jwtToken, paymentMethodId, paymentMethod, headers}) {
    return client({
      url: `/payment-methods/${paymentMethodId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {paymentMethod}
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
  function setToAgency({token, jwtToken, agencyId, providerId, paymentMethodNames, headers}) {
    return client({
      url: "/payment-methods-to-agencies",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {providerId, agencyId, paymentMethodNames}
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
  function createDefaultPaymentMethods({token, jwtToken, accountId}) {
    return client({
      url: "/default-payment-methods",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {accountId}
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
  function deleteCustomersCreditCardInfo({token, jwtToken, paymentMethodId}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
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
  function deletePaymentMethodsDomain({token, jwtToken, domain}) {
    return client({
      url: `/payment-methods/domains/${domain}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    all,
    getByProviderName,
    create,
    get,
    setToAgency,
    update,
    createDefaultPaymentMethods,
    deleteCustomersCreditCardInfo,
    deletePaymentMethodsDomain
  };
}

module.exports = paymentMethodsFactory;
