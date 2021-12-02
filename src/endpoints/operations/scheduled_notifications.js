const {authorizationHeaders} = require("./../endpoints_helpers");

function scheduledNotificationsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/scheduled-notifications",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({ token, jwtToken, id, data, headers }) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "put",
      params: data,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({ token, jwtToken, id, headers }) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "delete",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function create({ token, jwtToken, query = {}, data, headers }) {  
    return client({
      url: "/scheduled-notifications",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      params: query,
      data
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

module.exports = scheduledNotificationsFactory;
