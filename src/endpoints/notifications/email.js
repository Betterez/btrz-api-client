const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function emailFactory({
  client, internalAuthTokenProvider
}) {
  function create({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/email",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create
  };
}

module.exports = emailFactory;
