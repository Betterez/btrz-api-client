"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function marketplaceModifierFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/marketplace-modifiers", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var marketplaceModifierId = _ref3.marketplaceModifierId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/marketplace-modifiers/" + marketplaceModifierId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        marketplaceModifier = _ref4.marketplaceModifier,
        headers = _ref4.headers;

    return client({
      url: "/marketplace-modifiers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        marketplaceModifier: marketplaceModifier
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        marketplaceModifierId = _ref5.marketplaceModifierId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/marketplace-modifiers/" + marketplaceModifierId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        marketplaceModifierId = _ref6.marketplaceModifierId,
        marketplaceModifier = _ref6.marketplaceModifier,
        headers = _ref6.headers;

    return client({
      url: "/marketplace-modifiers/" + marketplaceModifierId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        marketplaceModifier: marketplaceModifier
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = marketplaceModifierFactory;