export = banksFactory;
declare function banksFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ bankId, token, headers, jwtToken }: {
        bankId: any;
        token: any;
        headers: any;
        jwtToken: any;
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
