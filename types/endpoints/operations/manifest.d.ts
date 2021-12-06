export = manifestFactory;
declare function manifestFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    getAll: ({ token, jwtToken, providerId, data, headers }: {
        token: any;
        jwtToken: any;
        providerId: any;
        data: any;
        headers: any;
    }) => any;
    getById: ({ token, jwtToken, manifestId, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        headers: any;
    }) => any;
    outlook: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    patch: ({ token, jwtToken, query, operations, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        operations: any;
        headers: any;
    }) => any;
    save: ({ token, jwtToken, providerId, data, headers }: {
        token: any;
        jwtToken: any;
        providerId: any;
        data: any;
        headers: any;
    }) => any;
    addUser: ({ token, jwtToken, manifestId, query, data, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    removeUser: ({ token, jwtToken, manifestId, userId, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        userId: any;
        headers: any;
    }) => any;
    updateComment: ({ token, jwtToken, manifestId, query, data, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
};
