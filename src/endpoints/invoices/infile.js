const {authorizationHeaders} = require("./../endpoints_helpers");

function infileFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}}) {
    return client({
      url: "/infile",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query,
      data
    });
  }

  return {
    create
  };
}

module.exports = infileFactory;
