const { authorizationHeaders } = require("./../endpoints_helpers");

function promosFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {}, headers }) {
    return client.get("/promos", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({ promoId, token, query = {}, headers }) {
    return client.get(`/promos/${promoId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ jwtToken, promo, token, headers }) {
    return client({
      url: "/promos",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { promo }
    });
  }

  function remove({ jwtToken, promoId, token, headers }) {
    return client({
      url: `/promos/${promoId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({ jwtToken, token, promoId, update, headers }) {
    return client({
      url: `/promos/${promoId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { update }
    });
  }

  function addRule({ jwtToken, token, promoId, rule, headers }) {
    return client({
      url: `/promos/${promoId}/rules`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { rule }
    });
  }

  function updateRule({ jwtToken, token, promoId, ruleId, rule, headers }) {
    return client({
      url: `/promos/${promoId}/rules/${ruleId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { rule }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove,
    addRule,
    updateRule
  };

}

module.exports = promosFactory;
