export = maritalStatusFactory;
declare function maritalStatusFactory({ client, internalAuthTokenProvider }: {
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
    update: ({ token, jwtToken, id, data, query, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        data: any;
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
    create: ({ token, jwtToken, data, query, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        query?: {};
        headers: any;
    }) => any;
};
