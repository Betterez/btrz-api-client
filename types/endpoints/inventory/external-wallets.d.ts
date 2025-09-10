export = externalWalletsFactory;
declare function externalWalletsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    saldoMax: {
        create: ({ token, jwtToken, wallet }: {
            token: any;
            jwtToken: any;
            wallet: any;
        }) => any;
        get: ({ token, jwtToken, walletId }: {
            token: any;
            jwtToken: any;
            walletId: any;
        }) => any;
        update: ({ token, jwtToken, wallet }: {
            token: any;
            jwtToken: any;
            wallet: any;
        }) => any;
    };
};
