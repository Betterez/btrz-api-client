export = schedulesFactory;
declare function schedulesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, routeId, scheduleId, headers }: {
        token: any;
        routeId: any;
        scheduleId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, data, routeId, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        routeId: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, data, routeId, scheduleId, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        routeId: any;
        scheduleId: any;
        headers: any;
    }) => any;
    delete: ({ token, jwtToken, routeId, scheduleId, headers }: {
        token: any;
        jwtToken: any;
        routeId: any;
        scheduleId: any;
        headers: any;
    }) => any;
    autoBouncing: {
        create: ({ token, jwtToken, data, headers }: {
            token: any;
            jwtToken: any;
            data: any;
            headers: any;
        }) => any;
        delete: ({ token, jwtToken, routeId, parentScheduleId, headers }: {
            token: any;
            jwtToken: any;
            routeId: any;
            parentScheduleId: any;
            headers: any;
        }) => any;
    };
};
