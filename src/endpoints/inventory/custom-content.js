const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function customContentFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    query = {}
  }) {
    return client.get("/custom-content", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({customContentId, token}) {
    return client.get(`/custom-content/${customContentId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ jwtToken, token, customContent }) {
    return client({
      url: "/custom-content",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        customContent
      }
    });
  }

  function remove({ jwtToken, customContentId, token }) {
    return client({
      url: `/custom-content/${customContentId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, customContentId, customContent}) {
    return client({
      url: `/custom-content/${customContentId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
