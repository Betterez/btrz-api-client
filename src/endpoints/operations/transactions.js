// const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function transactionsFactory({ client }) {

  function get({ token, jwtToken, trxId }) {
    return client({
      url: `/transactions/${trxId}`,
      headers: authorizationHeaders({ token, jwtToken })
    });
  }

  function appliedInsurance({ token, jwtToken, trxId }) {
    return client({
      url: `/transactions/${trxId}/applied-insurance`,
      headers: authorizationHeaders({ token, jwtToken })
    });
  }

  return {
    get,
    appliedInsurance
  };
}

module.exports = transactionsFactory;
