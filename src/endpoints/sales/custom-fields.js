const { authorizationHeaders } = require("./../endpoints_helpers");

function customFieldsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {}, headers }) {
    return client.get("/custom-fields", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return { 
    all
  };
}

module.exports = customFieldsFactory;
