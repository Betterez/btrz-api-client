const {authorizationHeaders} = require("./../endpoints_helpers");

function trustedMachinesFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/trusted-machines",
      method: "post",
      withCredentials: true,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/trusted-machines/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({token, jwtToken, query = {}, headers}) {
    return client({
      params: query,
      url: "/trusted-machines",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create,
    get,
    all
  };
}

module.exports = trustedMachinesFactory;
