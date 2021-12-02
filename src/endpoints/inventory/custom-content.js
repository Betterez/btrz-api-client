const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function customContentFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/custom-content", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({customContentId, token, headers}) {
    return client.get(`/custom-content/${customContentId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ jwtToken, token, customContent, headers }) {
    return client({
      url: "/custom-content",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        customContent
      }
    });
  }

  function remove({ jwtToken, customContentId, token, headers }) {
    return client({
      url: `/custom-content/${customContentId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, customContentId, customContent, headers}) {
    return client({
      url: `/custom-content/${customContentId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        customContent
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

module.exports = customContentFactory;
