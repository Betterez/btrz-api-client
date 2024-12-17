const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function integrationsFactory({client, version}) {
  function get({
    jwtToken, clientId
  }) {
    return client({
      url: `/${version}/client/integrations`,
      method: "get",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken}))
    });
  }

  function create({
    jwtToken, clientId, data
  }) {
    return client({
      url: `/${version}/client/integrations`,
      method: "post",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken})),
      data
    });
  }

  function remove({
    jwtToken, clientId, integrationType
  }) {
    return client({
      url: `/${version}/client/integrations/${integrationType}`,
      method: "delete",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken}))
    });
  }

  return {
    get,
    create,
    remove
  };
}

module.exports = integrationsFactory;
