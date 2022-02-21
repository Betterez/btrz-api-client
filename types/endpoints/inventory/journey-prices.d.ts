export = journeyPricesFactory;
declare function journeyPricesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    deleteById: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    get: ({ id, token, jwtToken, query, headers }: {
        id: any;
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, journeyPrice, headers }: {
        token: any;
        jwtToken: any;
        journeyPrice: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, journeyPriceId, journeyPrice, headers }: {
        token: any;
        jwtToken: any;
        journeyPriceId: any;
        journeyPrice: any;
        headers: any;
    }) => any;
};
