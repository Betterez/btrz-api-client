/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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
   * GET lexicons/buscompany - list lexicons for bus company context.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.context - Context (e.g. buscompany)
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * POST /lexicons - create lexicon entries.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Array} opts.lexiconEntries - Entries to create
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * PUT /lexicons - create or update many lexicon entries.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Array} opts.entries - Entries to create or update
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * PATCH /lexicons - update many lexicon entries.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Array} opts.updates - Updates to apply
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * Search global lexicons (no account) by partial match on the translation value for the given language.
   * @param {Object} opts
   * @param {string} opts.lang - Language code (e.g. en-us, pt-br). Must be a supported language.
   * @param {string} opts.txt - Text to search for (partial, case-insensitive). Required.
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<{data: { lexiconTextContentItems: Array }}>}
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
     * List lexicon suggestions for the account (or all accounts when super user params are provided).
     * @param {Object} opts
     * @param {string} [opts.token] - API key (x-api-key)
     * @param {string} [opts.jwtToken] - JWT or constants.INTERNAL_AUTH_TOKEN_SYMBOL for internal auth
     * @param {Object} [opts.headers] - Optional request headers
     * @param {Object} [opts.params] - Query params: status, lang, key, superUserId, superUserHash
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
     * Get a single lexicon suggestion by id.
     * @param {Object} opts
     * @param {string} opts.suggestionId - MongoDB ObjectId of the suggestion
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional request headers
     * @param {Object} [opts.params] - Query params: superUserId, superUserHash (to access any account's suggestion)
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
