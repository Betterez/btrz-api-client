

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /lexicons/:lexiconCollectionId (btrz-api-accounts). See get-lexicons handler getSpec().
 * @typedef {Object} LexiconsListQuery
 * @property {string} [providerIds] - Provider ids to get lexicons for
 * @property {string} [context] - Context of the lexicons to search
 * @property {boolean} [accountOnly] - Filter lexicons only for the given providerIds; context ignored when true
 * @property {string} [key] - Specific lexicon key to search for
 * @property {string} [keys] - Comma-separated list of keys to search for
 * @property {string} [lang] - ISO language code to filter values
 * @property {string} [langs] - Comma-separated ISO language codes to filter values
 */

/**
 * Query params for GET /lexicons/suggestions (btrz-api-accounts). See get-lexicons-suggestions handler getSpec().
 * @typedef {Object} LexiconSuggestionsListQuery
 * @property {string} [status] - Filter by status: under review | accepted | rejected
 * @property {string} [lang] - Filter by language code (e.g. en-us, pt-br)
 * @property {string} [key] - Filter by lexicon key
 * @property {string} [superUserId] - Super user id; with superUserHash returns suggestions for all accounts
 * @property {string} [superUserHash] - Super user hash; with superUserId returns suggestions for all accounts
 */

/**
 * Query params for GET /lexicons/suggestions/:id (btrz-api-accounts). See get-lexicons-suggestion-by-id handler getSpec().
 * @typedef {Object} LexiconSuggestionGetByIdQuery
 * @property {string} [superUserId] - Super user id; with superUserHash any suggestion can be retrieved
 * @property {string} [superUserHash] - Super user hash; with superUserId any suggestion can be retrieved
 */

/**
 * Factory for lexicons API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, createOrUpdateMany: function, updateMany: function, getByText: function, suggestions: { list: function, getById: function, update: function, delete: function, create: function } }}
 */


function lexiconsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /lexicons/buscompany – list account translations from buscompany collection. Query params from get-lexicons getSpec().
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.context] - Context of the lexicons to search (merged into query)
   * @param {LexiconsListQuery} [opts.query] - Query params: providerIds, context, accountOnly, key, keys, lang, langs
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ lexicons: Array }>>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const context = _ref2.context;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    const queryObj = Object.assign({}, query, {context});

    return client({
      url: "lexicons/buscompany",
      params: queryObj,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /lexicons – create lexicon entries. Body: { entries }. Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Array} opts.lexiconEntries - Entries to create (accountId, name, values, context per item)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ successes: Array, failures: Array }>>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const lexiconEntries = _ref3.lexiconEntries;
    const headers = _ref3.headers;

    return client({
      url: "/lexicons",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        entries: lexiconEntries
      }
    });
  }

  /**
   * PUT /lexicons – create or update many lexicon entries. Body: { entries }. Emits webhook lexicons.updated. Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Array} opts.entries - Entries to create or update (key, values per item)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ status: string, entries: Array }>>}
   */
  function createOrUpdateMany(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const entries = _ref4.entries;
    const headers = _ref4.headers;

    return client({
      url: "/lexicons",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        entries
      }
    });
  }

  /**
   * PATCH /lexicons – update many lexicon entries. Body: { updates } (key, accountId, values and/or context). Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Array} opts.updates - Updates to apply (key, accountId, values?, context?)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ entries: Array }>>}
   */
  function updateMany(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const updates = _ref5.updates;
    const headers = _ref5.headers;

    return client({
      url: "/lexicons",
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        updates
      }
    });
  }

  /**
   * GET /lexicons/:lang/content – search global lexicons (no account) by partial match on translation value. Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} opts.lang - Language code (e.g. en-us, pt-br). Must be a supported language.
   * @param {string} opts.txt - Text to search for (partial, case-insensitive). Required.
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ lexiconTextContentItems: Array }>>}
   */
  function getByText(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;
    const lang = _ref6.lang;
    const txt = _ref6.txt;

    return client({
      url: `/lexicons/${encodeURIComponent(lang)}/content`,
      params: {txt},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const suggestions = {
    /**
     * GET /lexicons/suggestions - list lexicon suggestions (or all accounts when super user params provided).
     * @param {Object} opts
     * @param {string} [opts.token] - API key (x-api-key)
     * @param {string} [opts.jwtToken] - JWT or constants.INTERNAL_AUTH_TOKEN_SYMBOL for internal auth
     * @param {Object} [opts.headers] - Optional request headers
     * @param {LexiconSuggestionsListQuery} [opts.params] - Query params: status, lang, key, superUserId, superUserHash
     * @returns {Promise<{data: { suggestions: Array }}>}
     */
    list: function list(_ref7) {
      const token = _ref7.token;
      const jwtToken = _ref7.jwtToken;
      const headers = _ref7.headers;
      const _ref7$params = _ref7.params;
      const params = _ref7$params === undefined ? {} : _ref7$params;

      return client({
        url: "/lexicons/suggestions",
        params,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },


    /**
     * GET /lexicons/suggestions/:id - get a single lexicon suggestion by id.
     * @param {Object} opts
     * @param {string} opts.suggestionId - MongoDB ObjectId of the suggestion
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional request headers
     * @param {LexiconSuggestionGetByIdQuery} [opts.params] - Query params: superUserId, superUserHash (to access any account's suggestion)
     * @returns {Promise<{data: Object}>}
     */
    getById: function getById(_ref8) {
      const token = _ref8.token;
      const jwtToken = _ref8.jwtToken;
      const headers = _ref8.headers;
      const suggestionId = _ref8.suggestionId;
      const _ref8$params = _ref8.params;
      const params = _ref8$params === undefined ? {} : _ref8$params;

      return client({
        url: `/lexicons/suggestions/${suggestionId}`,
        params,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },


    /**
     * Update a lexicon suggestion (status and optional rejected_reason). Requires super user auth.
     * @param {Object} opts
     * @param {string} opts.suggestionId - MongoDB ObjectId of the suggestion
     * @param {Object} opts.data - { status, [rejected_reason] }
     * @param {string} opts.superUserId - Super user id (required)
     * @param {string} opts.superUserHash - Super user hash (required)
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<{data: Object}>}
     */
    update: function update(_ref9) {
      const token = _ref9.token;
      const jwtToken = _ref9.jwtToken;
      const headers = _ref9.headers;
      const suggestionId = _ref9.suggestionId;
      const data = _ref9.data;
      const superUserId = _ref9.superUserId;
      const superUserHash = _ref9.superUserHash;

      const params = {superUserId, superUserHash};
      return client({
        url: `/lexicons/suggestions/${suggestionId}`,
        method: "put",
        params,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },


    /**
     * Delete a lexicon suggestion by id. Only suggestions with status "under review" can be deleted.
     * @param {Object} opts
     * @param {string} opts.suggestionId - MongoDB ObjectId of the suggestion to delete
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<{status: number}>} Resolves with 204 on success
     */
    delete: function _delete(_ref10) {
      const token = _ref10.token;
      const jwtToken = _ref10.jwtToken;
      const headers = _ref10.headers;
      const suggestionId = _ref10.suggestionId;

      return client({
        url: `/lexicons/suggestions/${suggestionId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },


    /**
     * Submit a translation suggestion for an existing lexicon key and language.
     * @param {Object} opts
     * @param {string} opts.key - The existing lexicon key to suggest a translation for
     * @param {string} opts.lang - Supported language code (e.g. en-us, pt-br)
     * @param {Object} opts.data - { txt } - The suggested translation text
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<{data: Object}>}
     */
    create: function create(_ref11) {
      const token = _ref11.token;
      const jwtToken = _ref11.jwtToken;
      const headers = _ref11.headers;
      const key = _ref11.key;
      const lang = _ref11.lang;
      const data = _ref11.data;

      return client({
        url: `/lexicons/${encodeURIComponent(key)}/${encodeURIComponent(lang)}/suggestion`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    all,
    create,
    createOrUpdateMany,
    updateMany,
    getByText,
    suggestions
  };
}

module.exports = lexiconsFactory;
