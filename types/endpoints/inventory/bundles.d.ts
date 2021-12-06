export = bundlesFactory;
declare function bundlesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, bundleId, headers }: {
        token: any;
        jwtToken: any;
        bundleId: any;
        headers: any;
    }) => any;
};
