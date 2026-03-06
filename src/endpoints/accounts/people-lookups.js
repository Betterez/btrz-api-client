/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /people-lookups (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} PeopleLookupsListQuery
 * @property {string} [dynamicFormId] - If provided, only include this dynamic form's data in response
 * @property {string} [documentNumber] - Document number to search for
 * @property {string} [documentTypeId] - Document type id to search for
 * @property {string} [email] - Email to search for
 * @property {string} [customerNumber] - Customer number to search for
 * @property {string} [phone] - Phone to search for
 */

/**
 * Query params for GET /people-lookups/:personId (btrz-api-accounts). See get-by-id-handler getSpec().
 * @typedef {Object} PeopleLookupGetByIdQuery
 * @property {string} [dynamicFormId] - If provided, only include this dynamic form's data in response
 */

/**
 * Factory for people-lookups API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getById: function, update: function, create: function, remove: function }}
 */
function peopleLookupsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /people-lookups - list people lookups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PeopleLookupsListQuery} [opts.query] - Query params (dynamicFormId, documentNumber, documentTypeId, email, customerNumber, phone)
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: "/people-lookups",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /people-lookups/:personId - get a person lookup.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (ObjectId)
   * @param {PeopleLookupGetByIdQuery} [opts.query] - Query params: dynamicFormId
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById({token, jwtToken, query, headers, personId, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;

    return client({
      url: `/people-lookups/${personId}`,
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /people-lookups/:personId - update a person lookup. API getSpec() does not define query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (ObjectId)
   * @param {Object} opts.person - Person payload
   * @param {string} [opts.providerId] - Provider id (ObjectId); sent as query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, personId, person, headers, providerId}) {
    const query = providerId ? {providerId} : {};

    return client({
      url: `/people-lookups/${personId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data: {
        person
      }
    });
  }

  /**
   * POST /people-lookups - create a person lookup. API getSpec() does not define query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.person - Person payload
   * @param {string} [opts.providerId] - Provider id (ObjectId); sent as query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, person, headers, providerId}) {
    const query = providerId ? {providerId} : {};

    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data: {
        person
      }
    });
  }

  /**
   * DELETE /people-lookups/:personId - remove a person lookup. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({personId, token, jwtToken, headers}) {
    return client({
      url: `/people-lookups/${personId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }


  return {
    all,
    getById,
    update,
    create,
    remove
  };
}

module.exports = peopleLookupsFactory;
