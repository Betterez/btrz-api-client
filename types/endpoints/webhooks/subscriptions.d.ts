export = subscriptionsFactory;
declare function subscriptionsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, context, query, headers }: {
        token: any;
        jwtToken: any;
        context: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, subscription, headers }: {
        token: any;
        jwtToken: any;
        subscription: any;
        headers: any;
    }) => any;
    getById: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    put: ({ token, jwtToken, id, subscription, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        subscription: any;
        headers: any;
    }) => any;
    deleteById: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
};
