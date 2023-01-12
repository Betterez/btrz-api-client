export = banksFactory;
declare function banksFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ bankId, token, headers }: {
        bankId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, bank, headers }: {
        jwtToken: any;
        token: any;
        bank: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, bankId, bank, headers }: {
        jwtToken: any;
        token: any;
        bankId: any;
        bank: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, bankId, token, headers }: {
        jwtToken: any;
        bankId: any;
        token: any;
        headers: any;
    }) => any;
};
