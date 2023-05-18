export = parcelsManifestsFactory;
declare function parcelsManifestsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, query, data, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
};
