const {authorizationHeaders} = require("./../endpoints_helpers.js");

function changeRequestsFactory({client, internalAuthTokenProvider}) {
  function get({changerequestId, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/change-requests/${changerequestId}/manifests`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/change-requests/manifests",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function update({changerequestId, data, token, jwtToken, headers}) {
    return client({
      url: `/change-requests/${changerequestId}/manifests`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  const schedules = {
    get({changeRequestId, token, jwtToken, query = {}, headers}) {
      return client({
        url: `/change-requests/${changeRequestId}/schedules`,
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
      });
    },

    create({data, token, jwtToken, headers}) {
      return client({
        url: "/change-requests/schedules",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },

    update({changeRequestId, data, token, jwtToken, headers}) {
      return client({
        url: `/change-requests/${changeRequestId}/schedules`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    get,
    create,
    update,
    schedules
  };
}

module.exports = changeRequestsFactory;
