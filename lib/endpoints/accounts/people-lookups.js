function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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
function peopleLookupsFactory({
  client,
  internalAuthTokenProvider
}) {
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
  function all({
    token,
    jwtToken,
    query,
    headers,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: "/people-lookups",
      params: query_,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function getById({
    token,
    jwtToken,
    query,
    headers,
    personId,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: `/people-lookups/${personId}`,
      params: query_,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function update({
    jwtToken,
    token,
    personId,
    person,
    headers,
    providerId
  }) {
    const query = providerId ? {
      providerId
    } : {};
    return client({
      url: `/people-lookups/${personId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
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
  function create({
    jwtToken,
    token,
    person,
    headers,
    providerId
  }) {
    const query = providerId ? {
      providerId
    } : {};
    return client({
      url: "/people-lookups",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
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
  function remove({
    personId,
    token,
    jwtToken,
    headers
  }) {
    return client({
      url: `/people-lookups/${personId}`,
      method: "delete",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
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