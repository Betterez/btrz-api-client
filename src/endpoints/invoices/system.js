const {authorizationHeaders} = require("./../endpoints_helpers");

function systemFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/system",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    create
  };
}

module.exports = systemFactory;
