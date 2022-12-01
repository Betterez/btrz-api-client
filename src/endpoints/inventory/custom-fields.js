const {authorizationHeaders} = require("./../endpoints_helpers");

function customFieldsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client({
      url: "/custom-fields",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({fieldId, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/custom-fields/${fieldId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, field, headers}) {
    return client({
      url: "/custom-fields",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {field}
    });
  }

  function update({token, jwtToken, fieldId, field, headers}) {
    return client({
      url: `/custom-fields/${fieldId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {field}
    });
  }

  const types = {
    all({token, headers}) {
      return client({
        url: "/custom-fields/types",
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    types
  };
}

module.exports = customFieldsFactory;
