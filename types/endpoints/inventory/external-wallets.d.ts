export = externalWalletsFactory;
declare function externalWalletsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    saldoMax: {
        create: ({ token, jwtToken, externalWallet }: {
            token: any;
            jwtToken: any;
            externalWallet: any;
        }) => any;
        get: ({ token, jwtToken, walletId }: {
            token: any;
            jwtToken: any;
            walletId: any;
        }) => any;
        update: ({ token, jwtToken, externalWallet }: {
            token: any;
            jwtToken: any;
            externalWallet: any;
        }) => any;
    };
};
