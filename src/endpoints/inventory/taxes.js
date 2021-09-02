const {authorizationHeaders} = require("../endpoints_helpers");

function taxesFactory({client, internalAuthTokenProvider}) {

  function all({token, query = {}}) {
    return client.get("/taxes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({taxId, token, query = {}}) {
    return client.get(`/taxes/${taxId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({jwtToken, tax, token}) {
    return client({
      url: "/taxes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {tax}
    });
  }

  function update({jwtToken, token, taxId, tax}) {
    return client({
      url: `/taxes/${taxId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {tax}
    });
  }

  return {
    all,
    get,
    create,
    update
  };

}

module.exports = taxesFactory;
