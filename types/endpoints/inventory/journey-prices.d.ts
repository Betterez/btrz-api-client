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
};
