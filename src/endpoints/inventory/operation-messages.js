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

  // it's being used post to get the ability to use a complex json payload
  function getByStation({token, jwtToken, opMsgData}) {
    return client({
      url: "/operation-messages-stations",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: opMsgData
    });
  }

  return {
    get,
    all,
    create,
    update,
    remove,
    getByStation
  };
}

module.exports = operationMessagesFactory;
