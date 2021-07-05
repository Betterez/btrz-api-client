const base64 = require("base-64");
const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function customersFactory({client, internalAuthTokenProvider}) {
  function put({customerId, customer, token, jwtToken}) {
    return client({
      url: `/customers/${customerId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: customer
    });
  }

  function all({token, jwtToken, query = {}}) {
    return client({
      url: "/customers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({customer, token, jwtToken, query}) {
    return client({
      url: "/customer",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {customer},
      params: query,
    });
  }

  function signIn({email, password, apiKey}) {
    const encodedCredentials = base64.encode(`${email}:${password}`);
    const headers = {
      Authorization: `Basic ${encodedCredentials}`
    };
    const params = {};
    params["x-api-key"] = apiKey;
    return client({
      url: "/customers",
      method: "post",
      params,
      headers,
      data: {}
    });
  }

  function signInCas({service, ticket, token}) {
    return client({
      url: "/customers/cas",
      headers: authorizationHeaders({
        token, internalAuthTokenProvider
      }),
      method: "post",
      data: {
        service,
        ticket
      }
    });
  }

  function update({customerId, token, jwtToken, data, query}) {
    return client({
      url: `/customers/${customerId}`,
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  // travellers
  function travellersAll({customerId, token}) {
    return client({
      url: `/customers/${customerId}/travellers`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function travellersGet({customerId, travellerId, token}) {
    return client({
      url: `/customers/${customerId}/travellers/${travellerId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function travellersAdd({customerId, token, jwtToken, data}) {
    return client({
      url: `/customers/${customerId}/travellers`,
      method: "post",
      data,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function travellersUpdate({customerId, travellerId, token, jwtToken, data}) {
    return client({
      url: `/customers/${customerId}/travellers/${travellerId}`,
      method: "put",
      data,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function travellersRemove({customerId, travellerId, token, jwtToken}) {
    return client({
      url: `/customers/${customerId}/travellers/${travellerId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    put,
    all,
    create,
    signIn,
    signInCas,
    update,
    travellersAll,
    travellersGet,
    travellersAdd,
    travellersUpdate,
    travellersRemove
  };
}

module.exports = customersFactory;
