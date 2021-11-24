const {authorizationHeaders} = require("./../endpoints_helpers");

function emailsFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}}) {
    return client({
      url: "/emails",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query,
      data
    });
  }

  return {
    create
  };
}

module.exports = emailsFactory;
