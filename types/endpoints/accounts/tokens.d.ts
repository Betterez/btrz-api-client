export = applicationsFactory;
declare function applicationsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers, query }: {
        token: any;
        jwtToken: any;
        headers: any;
        query: any;
    }) => any;
    create: ({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
