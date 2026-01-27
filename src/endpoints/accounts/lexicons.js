const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function lexiconsFactory({
  client, internalAuthTokenProvider
}) {
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
