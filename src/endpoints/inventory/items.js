const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function itemsFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    query = {},
    jwtToken,
    headers
  }) {
    return client({
      url: "/items",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({itemId, token, jwtToken, query = {}, headers}) {
    return client.get(`/items/${itemId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, item, token, headers}) {
    return client({
      url: "/items",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {item}
    });
  }

  function update({jwtToken, token, itemId, item, headers}) {
    return client({
      url: `/items/${itemId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {item}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = itemsFactory;
