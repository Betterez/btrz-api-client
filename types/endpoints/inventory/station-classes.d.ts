export = stationClassFactory;
declare function stationClassFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, stationClassId, query, headers }: {
        token: any;
        jwtToken: any;
        stationClassId: any;
        query?: {};
        headers: any;
    }) => any;
    update: ({ token, jwtToken, stationClassId, data, headers }: {
        token: any;
        jwtToken: any;
        stationClassId: any;
        data: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, stationClassId, headers }: {
        token: any;
        jwtToken: any;
        stationClassId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
};
