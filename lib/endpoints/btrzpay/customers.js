"use strict";

const _require = require("./../endpoints_helpers");
const authorizationHeaders = _require.authorizationHeaders;

function customersFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const customer = _ref4.customer;
    const paymentMethodId = _ref4.paymentMethodId;

    return client({
      url: `/payment-methods/${paymentMethodId}/customers`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {customer}
    });
  }

  function get(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const customerId = _ref5.customerId;
    const paymentMethodId = _ref5.paymentMethodId;

    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function remove(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const customerId = _ref4.customerId;
    const paymentMethodId = _ref4.paymentMethodId;

    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }
  return {
    create,
    get,
    remove
  };
}

module.exports = customersFactory;