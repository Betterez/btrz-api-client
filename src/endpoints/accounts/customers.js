const base64 = require("base-64");
const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function customersFactory({client, internalAuthTokenProvider}) {
  function put({customerId, customer, token, jwtToken, headers}) {
    return client({
      url: `/customers/${customerId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: customer
    });
  }

  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/customers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({customer, token, jwtToken, query, headers}) {
    return client({
      url: "/customer",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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

  function signInCas({service, ticket, token, headers}) {
    return client({
      url: "/customers/cas",
      headers: authorizationHeaders({
        token, internalAuthTokenProvider, headers
      }),
      method: "post",
      data: {
        service,
        ticket
      }
    });
  }

  function update({customerId, token, jwtToken, data, query, headers}) {
    return client({
      url: `/customers/${customerId}`,
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    put,
    all,
    create,
    signIn,
    signInCas,
    update
  };
}

module.exports = customersFactory;
