const {authorizationHeaders} = require("./../endpoints_helpers");

function dlinkFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/dlink",
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

module.exports = dlinkFactory;
