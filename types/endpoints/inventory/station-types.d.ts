export = stationTypeFactory;
declare function stationTypeFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, stationTypeId, query, headers }: {
        token: any;
        jwtToken: any;
        stationTypeId: any;
        query?: {};
        headers: any;
    }) => any;
    update: ({ token, jwtToken, stationTypeId, data, headers }: {
        token: any;
        jwtToken: any;
        stationTypeId: any;
        data: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, stationTypeId, headers }: {
        token: any;
        jwtToken: any;
        stationTypeId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
};
