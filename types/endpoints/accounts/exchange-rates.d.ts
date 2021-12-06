export = exchangeRatesFactory;
declare function exchangeRatesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    allByIsoCode: ({ token, jwtToken, isoCode, query, headers }: {
        token: any;
        jwtToken: any;
        isoCode: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
