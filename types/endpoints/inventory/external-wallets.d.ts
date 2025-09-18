export = externalWalletsFactory;
declare function externalWalletsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    saldoMax: {
        all: ({ token, jwtToken, query, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }) => any;
        create: ({ token, jwtToken, externalWallet, headers }: {
            token: any;
            jwtToken: any;
            externalWallet: any;
            headers: any;
        }) => any;
        get: ({ token, jwtToken, walletId, headers }: {
            token: any;
            jwtToken: any;
            walletId: any;
            headers: any;
        }) => any;
        update: ({ token, jwtToken, externalWallet, headers }: {
            token: any;
            jwtToken: any;
            externalWallet: any;
            headers: any;
        }) => any;
        movements: {
            create: ({ token, jwtToken, walletId, movement }: {
                token: any;
                jwtToken: any;
                walletId: any;
                movement: any;
            }) => any;
        };
    };
};
