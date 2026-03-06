/**
 * Builds authorization and forwarding headers for API requests.
 * @param {Object} opts - Options for authorization
 * @param {string} [opts.token] - API key; sets x-api-key header when provided
 * @param {string} [opts.jwtToken] - JWT or internal auth symbol; sets Authorization Bearer when provided
 * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider] - When jwtToken is INTERNAL_AUTH_TOKEN_SYMBOL, getToken() is used for the Bearer token
 * @param {Object} [opts.headers] - Optional request headers; x-amzn-trace-id and x-elevation-token are forwarded when present; cookie with "btrz-trusted" is forwarded for trusted machine
 * @returns {Object} Headers object suitable for axios (x-api-key, Authorization, cookie, x-amzn-trace-id, x-elevation-token as applicable)
 */
export function authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }: {
    token?: string;
    jwtToken?: string;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
    headers?: any;
}): any;
