const {authorizationHeaders} = require("../endpoints_helpers.js");

function dynamicFormsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, dynamicFormId, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/dynamic-forms",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/dynamic-forms",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  function update({token, jwtToken, dynamicFormId, data, headers}) {
    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({dynamicFormId, token, jwtToken, headers}) {
    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const fields = {
    get({token, jwtToken, dynamicFormFieldId, headers} = {}) {
      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/dynamic-forms/fields",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({jwtToken, token, data, headers}) {
      return client({
        url: "/dynamic-forms/fields",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },
    update({jwtToken, token, dynamicFormFieldId, data, headers}) {
      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },
    remove({dynamicFormFieldId, token, jwtToken, headers}) {
      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    get,
    all,
    create,
    update,
    remove,
    fields
  };
}

module.exports = dynamicFormsFactory;
