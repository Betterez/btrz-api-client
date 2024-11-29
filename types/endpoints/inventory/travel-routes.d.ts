export = travelRoutesFactory;
declare function travelRoutesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ travelRouteId, token, headers }: {
        travelRouteId: any;
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
