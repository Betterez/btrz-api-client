/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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
function lexiconsFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /lexicons/buscompany – list account translations from buscompany collection. Query params from get-lexicons getSpec().
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.context] - Context of the lexicons to search (merged into query)
   * @param {LexiconsListQuery} [opts.query] - Query params: providerIds, context, accountOnly, key, keys, lang, langs
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ lexicons: Array }>>}
   */
  function all({
    token,
    context,
    query = {},
    headers
  }) {
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
  function create({
    token,
    jwtToken,
    lexiconEntries,
    headers
  }) {
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
  function createOrUpdateMany({
    token,
    jwtToken,
    entries,
    headers
  }) {
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
  function updateMany({
    token,
    jwtToken,
    updates,
    headers
  }) {
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
  function getByText({token, jwtToken, headers, lang, txt}) {
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
    list({token, jwtToken, headers, params = {}}) {
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
    getById({token, jwtToken, headers, suggestionId, params = {}}) {
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
    update({token, jwtToken, headers, suggestionId, data, superUserId, superUserHash}) {
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
    delete({token, jwtToken, headers, suggestionId}) {
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
    create({token, jwtToken, headers, key, lang, data}) {
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
