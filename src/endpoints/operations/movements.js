const { authorizationHeaders } = require("./../endpoints_helpers");

function movementsFactory({ client, internalAuthTokenProvider }) {
  function create({ token, jwtToken, movement, query = {} }) {
    return client({
      url: `/movements`,
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: movement
    });
  }

  return {
    create
  };

}

module.exports = movementsFactory;
