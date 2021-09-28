const {
  authorizationHeaders
} = require("../endpoints_helpers");

function marketplaceModifierFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {}
  }) {
    return client.get("/marketplace-modifiers", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({marketplaceModifierId, token}) {
    return client.get(`/marketplace-modifiers/${marketplaceModifierId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({jwtToken, token, marketplaceModifier}) {
    return client({
      url: "/marketplace-modifiers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        marketplaceModifier
      }
    });
  }

  function remove({jwtToken, marketplaceModifierId, token}) {
    return client({
      url: `/marketplace-modifiers/${marketplaceModifierId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, marketplaceModifierId, marketplaceModifier}) {
    return client({
      url: `/marketplace-modifiers/${marketplaceModifierId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
