const { authorizationHeaders } = require("./../endpoints_helpers");

function appliedInsuranceFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, trxId, headers }) {
    const query = {trxId};

    return client({
      url: `/appliedInsurances`,
      params: query,
      headers: authorizationHeaders({ token , jwtToken, internalAuthTokenProvider, headers })
    });
  }

  return { all };
}

module.exports = appliedInsuranceFactory;
