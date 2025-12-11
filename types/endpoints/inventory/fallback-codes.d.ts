export = fallbackCodesFactory;
declare function fallbackCodesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, id, headers }: {
        token: any;
        id: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, fallbackCode, headers }: {
        token: any;
        jwtToken: any;
        fallbackCode: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, fallbackCodeId, fallbackCode, headers }: {
        token: any;
        jwtToken: any;
        fallbackCodeId: any;
        fallbackCode: any;
        headers: any;
    }) => any;
};
