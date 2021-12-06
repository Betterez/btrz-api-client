export = bareRoutesFactory;
declare function bareRoutesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ routeId, token, query, headers }: {
        routeId: any;
        token: any;
        query?: {};
        headers: any;
    }) => any;
};
