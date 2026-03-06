const base64 = require("base-64");
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for customers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ put: function, all: function, create: function, signIn: function, signInCas: function, update: function, merge: function }}
 */
function customersFactory({client, internalAuthTokenProvider}) {
  /**
   * PUT /customers/:customerId - update a customer (full replace).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (ObjectId)
   * @param {Object} opts.customer - Customer payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function put({customerId, customer, token, jwtToken, headers}) {
    return client({
      url: `/customers/${customerId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: customer
    });
  }

  /**
   * GET /customers - list customers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Query params
   * @param {string} [opts.providerId] - Filter by provider id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: "/customers",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /customer - create a customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.customer - Customer payload
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({customer, token, jwtToken, query, headers}) {
    return client({
      url: "/customer",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {customer},
      params: query
    });
  }

  /**
   * POST /customers - sign in with email/password (Basic auth).
   * @param {Object} opts
   * @param {string} opts.email - Customer email
   * @param {string} opts.password - Customer password
   * @param {string} opts.apiKey - API key (x-api-key)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * POST /customers/cas - sign in via CAS (ticket).
   * @param {Object} opts
   * @param {string} opts.service - CAS service URL
   * @param {string} opts.ticket - CAS ticket
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * PATCH /customers/:customerId - partial update a customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (ObjectId)
   * @param {Object} opts.data - Partial customer payload
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({customerId, token, jwtToken, data, query, headers}) {
    return client({
      url: `/customers/${customerId}`,
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST /customers/merge - merge source customers into destination.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.destinationCustomerId - Destination customer id (ObjectId)
   * @param {Array<string>} opts.sourceCustomerIds - Source customer ids (ObjectIds)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function merge({destinationCustomerId, sourceCustomerIds, jwtToken, token}) {
    return client({
      url: "/customers/merge",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {destinationCustomerId, sourceCustomerIds}
    });
  }

  return {
    put,
    all,
    create,
    signIn,
    signInCas,
    update,
    merge
  };
}

module.exports = customersFactory;
