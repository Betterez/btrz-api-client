export = operationReasonFactory;
declare function operationReasonFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, id, query, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        query?: {};
        headers: any;
    }) => any;
    update: ({ token, jwtToken, id, operationReason, query, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        operationReason: any;
        query?: {};
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, id, query, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, operationReason, query, headers }: {
        token: any;
        jwtToken: any;
        operationReason: any;
        query?: {};
        headers: any;
    }) => any;
};
