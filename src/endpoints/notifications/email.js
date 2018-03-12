const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function emailFactory({ client, internalAuthTokenProvider }) {

  function create({ token, query = {} }) {
    return client({
      url: "/email",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    create
  };
}

module.exports = emailFactory;