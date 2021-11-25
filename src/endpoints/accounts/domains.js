const {
  authorizationHeaders
} = require("../endpoints_helpers");

function domainsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}}) {
    return client({
      params: query,
      url: "/domains",
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({data, token, jwtToken}) {
    return client({
      url: "/domains",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function remove({domain, token, jwtToken}) {
    return client({
      url: `/domains/${domain}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    all,
    create,
    remove
  };
}

module.exports = domainsFactory;
