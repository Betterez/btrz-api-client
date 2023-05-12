export = infileFactory;
declare function infileFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, data, query, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        query?: {};
        headers: any;
    }) => any;
    validateCreate: ({ token, jwtToken, data, query, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        query?: {};
        headers: any;
    }) => any;
};
