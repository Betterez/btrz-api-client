const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function customFieldsFactory({ client }) {

  function all({ token, query = {} }) {
    return client.get("/custom-fields", {
      params: query,   
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all
  };
}

module.exports = customFieldsFactory;
