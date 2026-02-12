const {authorizationHeaders} = require("../endpoints_helpers.js");

function operationReasonFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/operation-reasons",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/operation-reasons/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function update({token, jwtToken, id, operationReason, query = {}, headers}) {
    return client({
      url: `/operation-reasons/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {operationReason}
    });
  }

  function remove({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/operation-reasons/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function create({token, jwtToken, operationReason, query = {}, headers}) {
    return client({
      url: "/operation-reasons",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {operationReason}
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = operationReasonFactory;
