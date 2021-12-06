export = domainsFactory;
declare function domainsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    remove: ({ domain, token, jwtToken, headers }: {
        domain: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
