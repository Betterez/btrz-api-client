export = productsFactory;
declare function productsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ productId, token, jwtToken, query, headers }: {
        productId: any;
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ productId, data, token, jwtToken, headers }: {
        productId: any;
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    families: {
        all: ({ token, query, headers }: {
            token: any;
            query?: {};
            headers: any;
        }) => any;
    };
    domains: {
        remove: ({ token, jwtToken, domain, headers }: {
            token: any;
            jwtToken: any;
            domain: any;
            headers: any;
        }) => any;
    };
};
