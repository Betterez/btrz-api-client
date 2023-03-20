const {authorizationHeaders} = require("../endpoints_helpers");

function gtiFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/gti",
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

module.exports = gtiFactory;
