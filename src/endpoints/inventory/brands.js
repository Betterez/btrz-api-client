const { authorizationHeaders } = require("./../endpoints_helpers");

function brandsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {}, headers }) {
    return client({
      url: "/brands",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function create({ token, jwtToken, brand, headers }) {
    return client({
      url: "/brands",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { brand }
    });
  }

  function update({ jwtToken, token, brandId, brand, headers }) {
    return client({ 
      url: `/brands/${brandId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { brand }
    });
  }

  function get({token, brandId, jwtToken, headers}) {
    return client({
      url: `/brands/${brandId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers}),
    });
  }

  return {
    all,
    create,
    update,
    get
  };
}

module.exports = brandsFactory;
