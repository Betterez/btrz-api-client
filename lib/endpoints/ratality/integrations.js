"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function integrationsFactory(_ref) {
  var client = _ref.client,
      version = _ref.version;

  function get(_ref2) {
    var jwtToken = _ref2.jwtToken,
        clientId = _ref2.clientId;

    return client({
      url: "/" + version + "/client/integrations",
      method: "get",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken }))
    });
  }

  function create(_ref3) {
    var jwtToken = _ref3.jwtToken,
        clientId = _ref3.clientId,
        data = _ref3.data;

    return client({
      url: "/" + version + "/client/integrations",
      method: "post",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken })),
      data: data
    });
  }

  function remove(_ref4) {
    var jwtToken = _ref4.jwtToken,
        clientId = _ref4.clientId,
        integrationType = _ref4.integrationType;

    return client({
      url: "/" + version + "/client/integrations/" + integrationType,
      method: "delete",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken }))
    });
  }

  return {
    get: get,
    create: create,
    remove: remove
  };
}

module.exports = integrationsFactory;