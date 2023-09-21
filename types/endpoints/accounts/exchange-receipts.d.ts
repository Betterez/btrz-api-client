export = exchangeReceiptsFactory;
declare function exchangeReceiptsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    update: ({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
