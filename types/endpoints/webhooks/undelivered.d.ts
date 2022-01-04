export = undeliveredFactory;
declare function undeliveredFactory({ client, internalAuthTokenProvider }: {
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
    getById: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    patch: ({ token, jwtToken, operation, headers }: {
        token: any;
        jwtToken: any;
        operation: any;
        headers: any;
    }) => any;
    resend: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    resendAll: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    deleteById: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
};
