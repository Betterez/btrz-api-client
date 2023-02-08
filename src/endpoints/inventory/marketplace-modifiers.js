const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function marketplaceModifierFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/marketplace-modifiers", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({marketplaceModifierId, token, headers}) {
    return client.get(`/marketplace-modifiers/${marketplaceModifierId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, marketplaceModifier, headers}) {
    return client({
      url: "/marketplace-modifiers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        marketplaceModifier
      }
    });
  }

  function remove({jwtToken, marketplaceModifierId, token, headers}) {
    return client({
      url: `/marketplace-modifiers/${marketplaceModifierId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, marketplaceModifierId, marketplaceModifier, headers}) {
    return client({
      url: `/marketplace-modifiers/${marketplaceModifierId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        marketplaceModifier
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = marketplaceModifierFactory;
