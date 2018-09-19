const { authorizationHeaders } = require("./../endpoints_helpers");

function brandsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/brands",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  function create({ token, jwtToken, brand }) {
    return client({
      url: "/brands",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { brand }
    });
  }

  function update({ jwtToken, token, brandId, brand }) {
    return client({ 
      url: `/brands/${brandId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { brand }
    });
  }

  function get({token, brandId, jwtToken}) {
    return client({
      url: `/brands/${brandId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken}),
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
