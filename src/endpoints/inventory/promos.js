const { authorizationHeaders } = require("./../endpoints_helpers");

function promosFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/promos", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({ promoId, accountId, token, query = {} }) {
    query.accountId = accountId;
    return client.get(`/promos/${promoId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ jwtToken, promo, token }) {
    return client({
      url: "/promos",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { promo }
    });
  }

  function remove({ jwtToken, promoId, token }) {
    return client({
      url: `/promos/${promoId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({ jwtToken, token, promoId, update }) {
    return client({
      url: `/promos/${promoId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { update }
    });
  }

  function addRule({ jwtToken, token, promoId, rule }) {
    return client({
      url: `/promos/${promoId}/rules`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { rule }
    });
  }

  function updateRule({ jwtToken, token, promoId, ruleId, ruleData }) {
    return client({
      url: `/promos/${promoId}/rules/${ruleId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { ruleData }
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
