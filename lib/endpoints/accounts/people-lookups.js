

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /people-lookups (btrz-api-accounts). Optional filters; when provided only matching people are returned.
 * @typedef {Object} PeopleLookupsListQuery
 * @property {string} [dynamicFormId] - If provided, only include this dynamic form's data in response
 * @property {string} [documentNumber] - Document number to search for
 * @property {string} [documentTypeId] - Document type id (ObjectId) to search for
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


function peopleLookupsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /people-lookups – list people lookups (paginated). Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PeopleLookupsListQuery} [opts.query] - Query params (dynamicFormId, documentNumber, documentTypeId, email, customerNumber, phone)
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ people: object[], totalRecords: number, page?: number, pageSize?: number }>>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const query = _ref2.query;
    const headers = _ref2.headers;
    const providerId = _ref2.providerId;

    const query_ = providerId ? _extends({}, query, {providerId}) : query;
    return client({
      url: "/people-lookups",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /people-lookups/:personId – get a single person lookup by id. Returns 404 if not found. Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (24 hex ObjectId)
   * @param {PeopleLookupGetByIdQuery} [opts.query] - Query params: dynamicFormId
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ person: object }>>}
   */
  function getById(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const query = _ref3.query;
    const headers = _ref3.headers;
    const personId = _ref3.personId;
    const providerId = _ref3.providerId;

    const query_ = providerId ? _extends({}, query, {providerId}) : query;

    return client({
      url: `/people-lookups/${personId}`,
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /people-lookups/:personId – update a person lookup. Emits peopleLookups.updated webhook. Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (24 hex ObjectId)
   * @param {Object} opts.person - Person payload (PeopleLookupPutData: documentTypeId, documentNumber, firstName, lastName, email, phone, dynamicForms, etc.)
   * @param {string} [opts.providerId] - Provider id (ObjectId); sent as query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ person: object }>>}
   */
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const personId = _ref4.personId;
    const person = _ref4.person;
    const headers = _ref4.headers;
    const providerId = _ref4.providerId;

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
   * POST /people-lookups – create a person lookup. Emits peopleLookups.created webhook. Requires BETTEREZ_APP audience. Body requires documentTypeId and documentNumber.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.person - Person payload (PeopleLookupPostData: documentTypeId, documentNumber required; firstName, lastName, email, phone, dynamicForms, etc.)
   * @param {string} [opts.providerId] - Provider id (ObjectId); sent as query for provider context
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ person: object }>>}
   */
  function create(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const token = _ref5.token;
    const person = _ref5.person;
    const headers = _ref5.headers;
    const providerId = _ref5.providerId;

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
   * DELETE /people-lookups/:personId – remove a person lookup. Emits peoplelookups.deleted webhook. Returns 404 if person not found. Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.personId - Person id (24 hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ personId: string }>>}
   */
  function remove(_ref6) {
    const personId = _ref6.personId;
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;

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
