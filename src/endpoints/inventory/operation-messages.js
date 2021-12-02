const { authorizationHeaders } = require("./../endpoints_helpers");

function operationMessagesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {}, headers }) {
    return client({
      url: "/operation-messages",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers}),
    });
  }

  function create({ token, jwtToken, opMsgData, headers }) {
    return client({
      url: "/operation-messages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: opMsgData
    });
  }

  function update({ token, jwtToken, operationMessageId, opMsgData, headers }) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: opMsgData
    });
  }

  function get({token, operationMessageId, headers}) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers}),
    });
  }

  function remove({ jwtToken, operationMessageId, token, headers }) {
    return client({
      url: `/operation-messages/${operationMessageId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  // it's being used post to get the ability to use a complex json payload
  function getByStation({token, jwtToken, opMsgData, headers}) {
    return client({
      url: "/operation-messages-stations",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
