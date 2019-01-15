const { authorizationHeaders } = require("./../endpoints_helpers");

function operationMessagesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {} }) {
    return client({
      url: "/operation-messages",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider}),
    });
  }

  function create({ token, jwtToken, opMsgData }) {
    return client({
      url: "/operation-messages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: opMsgData
    });
  }

  function update({ token, jwtToken, operationMessageId, opMsgData }) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: opMsgData
    });
  }

  function get({token, operationMessageId}) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider}),
    });
  }

  function remove({ jwtToken, operationMessageId, token }) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get,
    all,
    create,
    update,
    remove
  };
}

module.exports = operationMessagesFactory;
