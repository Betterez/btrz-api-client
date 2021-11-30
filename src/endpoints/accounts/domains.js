const {
  authorizationHeaders
} = require("../endpoints_helpers");

function domainsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client({
      params: query,
      url: "/domains",
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/domains",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({domain, token, jwtToken, headers}) {
    return client({
      url: `/domains/${domain}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    create,
    remove
  };
}

module.exports = domainsFactory;
