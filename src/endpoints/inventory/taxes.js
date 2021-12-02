const {authorizationHeaders} = require("../endpoints_helpers");

function taxesFactory({client, internalAuthTokenProvider}) {

  function all({token, query = {}, headers}) {
    return client.get("/taxes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({taxId, token, query = {}, headers}) {
    return client.get(`/taxes/${taxId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, tax, token, headers}) {
    return client({
      url: "/taxes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tax}
    });
  }

  function update({jwtToken, token, taxId, tax, headers}) {
    return client({
      url: `/taxes/${taxId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
