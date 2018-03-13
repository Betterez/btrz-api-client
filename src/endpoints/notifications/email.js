const { authorizationHeaders } = require("./../endpoints_helpers");

function emailFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, query = {} }) {
    return client({
      url: "/email",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    create
  };
}

module.exports = emailFactory;
