const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function customFieldsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {} }) {
    return client.get("/custom-fields", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all
  };
}

module.exports = customFieldsFactory;
