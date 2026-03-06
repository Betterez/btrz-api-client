export = programsFactory;
/**
 * Query params for GET /programs (loyalty). Client merges context into query.
 * @typedef {Object} LoyaltyProgramsListQuery
 * @property {string} [context] - Context (merged from opts.context by client)
 * @property {string} [providerId] - Provider id (if supported by backend)
 */
/**
 * Factory for loyalty programs API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, put: function }}
 */
declare function programsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    put: Function;
};
declare namespace programsFactory {
    export { LoyaltyProgramsListQuery };
}
/**
 * Query params for GET /programs (loyalty). Client merges context into query.
 */
type LoyaltyProgramsListQuery = {
    /**
     * - Context (merged from opts.context by client)
     */
    context?: string;
    /**
     * - Provider id (if supported by backend)
     */
    providerId?: string;
};
