export = externalPassesFactory;
declare function externalPassesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ externalPassId, token, jwtToken, headers }: {
        externalPassId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
