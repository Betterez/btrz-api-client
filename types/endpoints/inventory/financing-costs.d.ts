export = financingCostsFactory;
declare function financingCostsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ id, token, headers, jwtToken, query }: {
        id: any;
        token: any;
        headers: any;
        jwtToken: any;
        query?: {};
    }) => any;
    create: ({ jwtToken, token, financingCost, headers }: {
        jwtToken: any;
        token: any;
        financingCost: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, id, financingCost, headers }: {
        jwtToken: any;
        token: any;
        id: any;
        financingCost: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, id, token, headers, query }: {
        jwtToken: any;
        id: any;
        token: any;
        headers: any;
        query?: {};
    }) => any;
};
