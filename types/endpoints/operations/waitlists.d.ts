export = waitlistsFactory;
declare function waitlistsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, waitlistId, headers }: {
        token: any;
        jwtToken: any;
        waitlistId: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, waitlistId, headers }: {
        token: any;
        jwtToken: any;
        waitlistId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
};
