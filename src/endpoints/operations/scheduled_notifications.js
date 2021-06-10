const {authorizationHeaders} = require("./../endpoints_helpers");

function scheduledNotificationsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query}) {
    return client({
      url: "/scheduled-notifications",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function get({token, jwtToken, id}) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({ token, jwtToken, id, data }) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "put",
      params: data,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function remove({ token, jwtToken, id }) {
    return client({
      url: `/scheduled-notifications/${id}`,
      method: "delete",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function create({ token, jwtToken, query = {}, data }) {  
    return client({
      url: "/scheduled-notifications",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
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
