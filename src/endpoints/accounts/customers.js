/* eslint-disable max-len */
const base64 = require("base-64");
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /customers (btrz-api-accounts). Response is paginated (customers array + pagination).
 * @typedef {Object} CustomersQuery
 * @property {string} [customerNumber] - Filter: only that customer will be listed
 * @property {string} [externalId] - Filter: same format as when creating the customer; only that customer listed
 * @property {string} [providerIds] - Filter: provider ids to get customers from (comma-separated)
 * @property {string} [lookupSearchParams] - Lookup search in format "documentTypeId|DNI,documentNumber|1234567" (documentNumber required)
 */

/**
 * Factory for customers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ put: function, all: function, create: function, signIn: function, signInCas: function, update: function, merge: function }}
 */
function customersFactory({client, internalAuthTokenProvider}) {
  /**
   * PUT /customers/:customerId - update a customer (full replace). Requires BETTEREZ_APP or CUSTOMER audience; customer token may only update own record. Side effect: may emit customer.updated webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (24-char hex ObjectId)
   * @param {Object} opts.customer - Customer payload (CustomerData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ _id: string, customerNumber: string, ... }>>}
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
   * GET /customers - list customers (paginated). Optional filters: customerNumber, externalId, providerIds, lookupSearchParams.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CustomersQuery} [opts.query] - Query params; API expects providerIds (comma-separated). Use providerId to send a single id.
   * @param {string} [opts.providerId] - Convenience: added to query as providerId (single provider)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customers: Array<object>, total: number, ... }>>}
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
   * POST /customer - create a customer. Body: { customer }. If password is included, activation token is created and activation email sent. Side effect: may emit customer.created webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.customer - Customer payload (CustomerPost); email, firstName, lastName required
   * @param {Object} [opts.query] - Optional: uniqueEmail, lang, channel, platform, appVersion, appName, activateIfExists
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ _id: string, customerNumber: string, ... }>>}
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
   * PATCH /customers/:customerId - apply operations (activate, reset password, activateEmailAndPwd). Body: { operations } array of PatchCustomerOperation. Returns Customer and auth tokens. Side effect: may emit customer.updated webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customerId - Customer id (24-char hex ObjectId)
   * @param {Object} opts.data - Body: { operations } or array of { op, path, value }
   * @param {Object} [opts.query] - Optional query
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<CustomerWithAuthToken>>}
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
   * POST /customers/merge - merge source customers into destination. Requires BETTEREZ_APP. Side effect: emits customers.merged webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.destinationCustomerId - Destination customer id (24-char hex ObjectId)
   * @param {Array<string>} opts.sourceCustomerIds - Source customer ids (24-char hex ObjectIds)
   * @returns {Promise<import("axios").AxiosResponse<{ customerMerge: object }>>}
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
