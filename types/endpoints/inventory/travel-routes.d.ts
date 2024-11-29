export = travelRoutesFactory;
declare function travelRoutesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ travelRouteId, jwtToken, token, headers }: {
        travelRouteId: any;
        jwtToken: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, travelRoute, headers }: {
        jwtToken: any;
        token: any;
        travelRoute: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, travelRouteId, travelRoute, headers }: {
        jwtToken: any;
        token: any;
        travelRouteId: any;
        travelRoute: any;
        headers: any;
    }) => any;
};
