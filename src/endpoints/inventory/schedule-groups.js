const {authorizationHeaders} = require("./../endpoints_helpers.js");

function scheduleGroupsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client.get("/schedule-groups", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({token, scheduleGroupId, query = {}, headers}) {
    return client.get(`/schedule-groups/${scheduleGroupId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, scheduleGroup, headers}) {
    return client({
      url: "/schedule-groups",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {scheduleGroup}
    });
  }

  function update({token, jwtToken, scheduleGroupId, scheduleGroup, headers}) {
    return client({
      url: `/schedule-groups/${scheduleGroupId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {scheduleGroup}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = scheduleGroupsFactory;
