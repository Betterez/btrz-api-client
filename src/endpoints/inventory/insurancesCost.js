const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function insurancesCostFactory({
  client, internalAuthTokenProvider
}) {
  function get({
    token, productId, declaredValue, query = {}
  }) {
    return client.get(`/insurances/${productId}/cost`, {
      params: Object.assign(query, {declaredValue}),
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = insurancesCostFactory;
