export = stationsFactory;
declare function stationsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, id, headers }: {
        token: any;
        id: any;
        headers: any;
    }) => any;
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, stationId, station, headers }: {
        token: any;
        jwtToken: any;
        stationId: any;
        station: any;
        headers: any;
    }) => any;
};
