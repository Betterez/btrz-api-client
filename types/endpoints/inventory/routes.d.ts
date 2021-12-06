export = routesFactory;
declare function routesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ routeId, token, query, headers }: {
        routeId: any;
        token: any;
        query?: {};
        headers: any;
    }) => any;
    prices: ({ token, productId, originId, destinationId, channel, query, headers }: {
        token: any;
        productId: any;
        originId: any;
        destinationId: any;
        channel: any;
        query: any;
        headers: any;
    }) => any;
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    stations: ({ token, routeId, headers }: {
        token: any;
        routeId: any;
        headers: any;
    }) => any;
    fareTables: {
        all({ token, query, headers }: {
            token: any;
            query?: {};
            headers: any;
        }): any;
        create({ token, jwtToken, routeId, fareTable, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            fareTable: any;
            headers: any;
        }): any;
        update({ token, jwtToken, routeId, fareTableId, fareTable, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            fareTableId: any;
            fareTable: any;
            headers: any;
        }): any;
    };
};
