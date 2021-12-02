const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function insurancesCostFactory({
  client, internalAuthTokenProvider
}) {
  function get({
    token, productId, declaredValue, query = {}, headers
  }) {
    return client.get(`/insurances/${productId}/cost`, {
      params: Object.assign(query, {declaredValue}),
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = insurancesCostFactory;
