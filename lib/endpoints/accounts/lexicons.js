"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function lexiconsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        context = _ref2.context,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "lexicons/buscompany",
      params: queryObj,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        lexiconEntries = _ref3.lexiconEntries,
        headers = _ref3.headers;

    return client({
      url: "/lexicons",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        entries: lexiconEntries
      }
    });
  }

  function createOrUpdateMany(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        entries = _ref4.entries,
        headers = _ref4.headers;

    return client({
      url: "/lexicons",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        entries: entries
      }
    });
  }

  function updateMany(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        updates = _ref5.updates,
        headers = _ref5.headers;

    return client({
      url: "/lexicons",
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        updates: updates
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
   * @returns {Promise<{data: { lexicons: Array }}>}
   */
  function getByText(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers,
        lang = _ref6.lang,
        txt = _ref6.txt;

    return client({
      url: "/lexicons/" + encodeURIComponent(lang) + "/content",
      params: { txt: txt },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  var suggestions = {
    /**
     * List lexicon suggestions for the account (or all accounts when super user params are provided).
     * @param {Object} opts
     * @param {string} [opts.token] - API key (x-api-key)
     * @param {string} [opts.jwtToken] - JWT or constants.INTERNAL_AUTH_TOKEN_SYMBOL for internal auth
     * @param {Object} [opts.headers] - Optional request headers
     * @param {Object} [opts.params] - Query params: status, lang, key, superUserId, superUserHash
     * @returns {Promise<{data: { suggestions: Array }}>}
     */
    list: function list(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          headers = _ref7.headers,
          _ref7$params = _ref7.params,
          params = _ref7$params === undefined ? {} : _ref7$params;

      return client({
        url: "/lexicons/suggestions",
        params: params,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    getById: function getById(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          headers = _ref8.headers,
          suggestionId = _ref8.suggestionId,
          _ref8$params = _ref8.params,
          params = _ref8$params === undefined ? {} : _ref8$params;

      return client({
        url: "/lexicons/suggestions/" + suggestionId,
        params: params,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          headers = _ref9.headers,
          suggestionId = _ref9.suggestionId,
          data = _ref9.data,
          superUserId = _ref9.superUserId,
          superUserHash = _ref9.superUserHash;

      var params = { superUserId: superUserId, superUserHash: superUserHash };
      return client({
        url: "/lexicons/suggestions/" + suggestionId,
        method: "put",
        params: params,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
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
    create: function create(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          headers = _ref10.headers,
          key = _ref10.key,
          lang = _ref10.lang,
          data = _ref10.data;

      return client({
        url: "/lexicons/" + encodeURIComponent(key) + "/" + encodeURIComponent(lang) + "/suggestion",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    all: all,
    create: create,
    createOrUpdateMany: createOrUpdateMany,
    updateMany: updateMany,
    getByText: getByText,
    suggestions: suggestions
  };
}

module.exports = lexiconsFactory;