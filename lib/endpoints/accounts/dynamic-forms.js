function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /dynamic-forms (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} DynamicFormsQuery
 * @property {string} [dynamicFormFieldId] - Get all dynamic forms for the given field id (ObjectId)
 * @property {string} [providerId] - Get all dynamic forms for the given provider id (ObjectId)
 * @property {string} [type] - Filter by type: "reservation" | "parcel" | "checkin" | "paid_in" | "pay_on_account"
 */

/**
 * Query params for GET /dynamic-forms/:dynamicFormId (btrz-api-accounts). See get-by-id-handler getSpec().
 * @typedef {Object} DynamicFormByIdQuery
 * @property {string} [providerId] - Fetch the dynamic form for the given providerId (ObjectId)
 */

/**
 * Query params for GET /renderable-dynamic-forms/:dynamicFormId (btrz-api-accounts).
 * @typedef {Object} RenderableDynamicFormByIdQuery
 * @property {string} [providerId] - Fetch under provider context (ObjectId)
 * @property {string} [currentLanguage] - Language code used for translated values
 * @property {string} [documentTypeIds] - Comma-separated document type ids for filtering
 */

/**
 * Factory for dynamic-forms API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function, fields: { get: function, all: function, create: function, update: function, remove: function } }}
 */
function dynamicFormsFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /dynamic-forms/:dynamicFormId - get a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.dynamicFormId - Dynamic form id (ObjectId)
   * @param {DynamicFormByIdQuery} [opts.query] - Query params (providerId)
   * @param {string} [opts.providerId] - Provider id; if set, added to query (convenience)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    token,
    jwtToken,
    dynamicFormId,
    query = {},
    headers,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
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
   * GET /renderable-dynamic-forms/:dynamicFormId - get renderable dynamic form context.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.dynamicFormId - Dynamic form id (ObjectId)
   * @param {RenderableDynamicFormByIdQuery} [opts.query] - Query params
   * @param {string} [opts.providerId] - Provider id; if set, added to query (convenience)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getRenderable({
    token,
    jwtToken,
    dynamicFormId,
    query = {},
    headers,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: `/renderable-dynamic-forms/${dynamicFormId}`,
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
   * GET /dynamic-forms - list dynamic forms.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {DynamicFormsQuery} [opts.query] - Query params (dynamicFormFieldId, providerId, type)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client({
      url: "/dynamic-forms",
      params: query,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * POST /dynamic-forms - create a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Form payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token,
    jwtToken,
    query = {},
    data,
    headers
  }) {
    return client({
      url: "/dynamic-forms",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      params: query,
      data
    });
  }

  /**
   * PUT /dynamic-forms/:dynamicFormId - update a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.dynamicFormId - Dynamic form id (ObjectId)
   * @param {Object} opts.data - Form payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({
    token,
    jwtToken,
    dynamicFormId,
    data,
    headers
  }) {
    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data
    });
  }

  /**
   * DELETE /dynamic-forms/:dynamicFormId - delete a dynamic form.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.dynamicFormId - Dynamic form id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({
    dynamicFormId,
    token,
    jwtToken,
    headers
  }) {
    return client({
      url: `/dynamic-forms/${dynamicFormId}`,
      method: "delete",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }
  const fields = {
    /**
     * GET /dynamic-forms/fields/:dynamicFormFieldId - get a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.dynamicFormFieldId - Field id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({
      token,
      jwtToken,
      dynamicFormFieldId,
      headers
    } = {}) {
      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        headers: authorizationHeaders({
          token,
          jwtToken,
          internalAuthTokenProvider,
          headers
        })
      });
    },
    /**
     * GET /dynamic-forms/fields - list dynamic form fields.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({
      token,
      jwtToken,
      query = {},
      headers
    }) {
      return client({
        url: "/dynamic-forms/fields",
        params: query,
        headers: authorizationHeaders({
          token,
          jwtToken,
          internalAuthTokenProvider,
          headers
        })
      });
    },
    /**
     * POST /dynamic-forms/fields - create a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Field payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({
      jwtToken,
      token,
      data,
      headers
    }) {
      return client({
        url: "/dynamic-forms/fields",
        method: "post",
        headers: authorizationHeaders({
          token,
          jwtToken,
          internalAuthTokenProvider,
          headers
        }),
        data
      });
    },
    /**
     * PUT /dynamic-forms/fields/:dynamicFormFieldId - update a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.dynamicFormFieldId - Field id (ObjectId)
     * @param {Object} opts.data - Field payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({
      jwtToken,
      token,
      dynamicFormFieldId,
      data,
      headers
    }) {
      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        method: "put",
        headers: authorizationHeaders({
          token,
          jwtToken,
          internalAuthTokenProvider,
          headers
        }),
        data
      });
    },
    /**
     * DELETE /dynamic-forms/fields/:dynamicFormFieldId - delete a dynamic form field.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.dynamicFormFieldId - Field id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove({
      dynamicFormFieldId,
      token,
      jwtToken,
      headers
    }) {
      return client({
        url: `/dynamic-forms/fields/${dynamicFormFieldId}`,
        method: "delete",
        headers: authorizationHeaders({
          token,
          jwtToken,
          internalAuthTokenProvider,
          headers
        })
      });
    }
  };
  return {
    get,
    getRenderable,
    all,
    create,
    update,
    remove,
    fields
  };
}
module.exports = dynamicFormsFactory;