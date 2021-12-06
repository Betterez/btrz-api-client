export = brandsFactory;
declare function brandsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, brand, headers }: {
        token: any;
        jwtToken: any;
        brand: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, brandId, brand, headers }: {
        jwtToken: any;
        token: any;
        brandId: any;
        brand: any;
        headers: any;
    }) => any;
    get: ({ token, brandId, jwtToken, headers }: {
        token: any;
        brandId: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
