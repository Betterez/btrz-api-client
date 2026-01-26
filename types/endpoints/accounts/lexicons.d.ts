export = lexiconsFactory;
declare function lexiconsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, context, query, headers }: {
        token: any;
        context: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, lexiconEntries, headers }: {
        token: any;
        jwtToken: any;
        lexiconEntries: any;
        headers: any;
    }) => any;
    createOrUpdateMany: ({ token, jwtToken, entries, headers }: {
        token: any;
        jwtToken: any;
        entries: any;
        headers: any;
    }) => any;
    updateMany: ({ token, jwtToken, updates, headers }: {
        token: any;
        jwtToken: any;
        updates: any;
        headers: any;
    }) => any;
    /**
     * Search global lexicons (no account) by partial match on the translation value for the given language.
     * @param opts.lang - Language code (e.g. en-us, pt-br). Must be a supported language.
     * @param opts.txt - Text to search for (partial, case-insensitive). Required.
     */
    getByText: ({ token, jwtToken, headers, lang, txt }: {
        lang: string;
        txt: string;
        token?: string;
        jwtToken?: string;
        headers?: any;
    }) => Promise<{
        data: {
            lexicons: any[];
        };
    }>;
    suggestions: {
        /**
         * List lexicon suggestions for the account (or all accounts when super user params are provided).
         * @param {Object} opts
         * @param {string} [opts.token] - API key (x-api-key)
         * @param {string} [opts.jwtToken] - JWT or constants.INTERNAL_AUTH_TOKEN_SYMBOL for internal auth
         * @param {Object} [opts.headers] - Optional request headers
         * @param {Object} [opts.params] - Query params: status, lang, key, superUserId, superUserHash
         * @returns {Promise<{data: { suggestions: Array }}>}
         */
        list({ token, jwtToken, headers, params }: {
            token?: string;
            jwtToken?: string;
            headers?: any;
            params?: any;
        }): Promise<{
            data: {
                suggestions: any[];
            };
        }>;
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
        getById({ token, jwtToken, headers, suggestionId, params }: {
            suggestionId: string;
            token?: string;
            jwtToken?: string;
            headers?: any;
            params?: any;
        }): Promise<{
            data: any;
        }>;
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
        update({ token, jwtToken, headers, suggestionId, data, superUserId, superUserHash }: {
            suggestionId: string;
            data: any;
            superUserId: string;
            superUserHash: string;
            token?: string;
            jwtToken?: string;
            headers?: any;
        }): Promise<{
            data: any;
        }>;
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
        create({ token, jwtToken, headers, key, lang, data }: {
            key: string;
            lang: string;
            data: any;
            token?: string;
            jwtToken?: string;
            headers?: any;
        }): Promise<{
            data: any;
        }>;
    };
};
