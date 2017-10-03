const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");
const querystring = require("querystring");

function appliedInsuranceFactory({ client }) {

  function all({ token, jwtToken, trxId }) {
    const query = {trxId};

    return client({
      url: `/appliedInsurances`,
      params: query,
      headers: authorizationHeaders({ token , jwtToken })
    });
  }

  return { all };
}

module.exports = appliedInsuranceFactory;
