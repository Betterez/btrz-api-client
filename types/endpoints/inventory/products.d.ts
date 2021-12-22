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
    deleteProductsDomain: ({ token, jwtToken, domain }: {
        token: any;
        jwtToken: any;
        domain: any;
    }) => any;
};
