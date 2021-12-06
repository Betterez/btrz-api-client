export = taxesFactory;
declare function taxesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ taxId, token, query, headers }: {
        taxId: any;
        token: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ jwtToken, tax, token, headers }: {
        jwtToken: any;
        tax: any;
        token: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, taxId, tax, headers }: {
        jwtToken: any;
        token: any;
        taxId: any;
        tax: any;
        headers: any;
    }) => any;
};
