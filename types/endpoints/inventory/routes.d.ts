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
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, data, routeId, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        routeId: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, routeId, headers }: {
        token: any;
        jwtToken: any;
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
    stops: {
        create({ token, jwtToken, routeId, stop, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            stop: any;
            headers: any;
        }): any;
    };
    fareRules: {
        get({ token, routeId, headers }: {
            token: any;
            routeId: any;
            headers: any;
        }): any;
        create({ token, jwtToken, routeId, fareRule, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            fareRule: any;
            headers: any;
        }): any;
        update({ token, jwtToken, routeId, fareRuleId, fareRule, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            fareRuleId: any;
            fareRule: any;
            headers: any;
        }): any;
        remove({ token, jwtToken, routeId, fareRuleId, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            fareRuleId: any;
            headers: any;
        }): any;
    };
    priceBuckets: {
        get({ token, routeId, headers }: {
            token: any;
            routeId: any;
            headers: any;
        }): any;
        create({ token, jwtToken, routeId, bucket, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            bucket: any;
            headers: any;
        }): any;
        update({ token, jwtToken, routeId, bucketId, bucket, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            bucketId: any;
            bucket: any;
            headers: any;
        }): any;
        remove({ token, jwtToken, routeId, bucketId, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            bucketId: any;
            headers: any;
        }): any;
    };
    crossBorderDistances: {
        get({ token, routeId, headers }: {
            token: any;
            routeId: any;
            headers: any;
        }): any;
        update({ token, jwtToken, routeId, crossBorderDistances, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            crossBorderDistances: any;
            headers: any;
        }): any;
    };
};
