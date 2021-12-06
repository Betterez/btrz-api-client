export = fareClassesFactory;
declare function fareClassesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, fareClass, headers }: {
        token: any;
        jwtToken: any;
        fareClass: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, fareClassId, update, headers }: {
        token: any;
        jwtToken: any;
        fareClassId: any;
        update: any;
        headers: any;
    }) => any;
};
