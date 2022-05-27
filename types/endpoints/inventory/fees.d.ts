export = feesFactory;
declare function feesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, feeId, headers }: {
        token: any;
        jwtToken: any;
        feeId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, fee, headers }: {
        token: any;
        jwtToken: any;
        fee: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, feeId, fee, headers }: {
        token: any;
        jwtToken: any;
        feeId: any;
        fee: any;
        headers: any;
    }) => any;
};
