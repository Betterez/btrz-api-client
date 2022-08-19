export = invoicesFactory;
declare function invoicesFactory({ client, internalAuthTokenProvider }: {
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
    getInvoicesFailures: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
};
