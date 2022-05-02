export = scheduledNotificationsFactory;
declare function scheduledNotificationsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, id, data, headers, query }: {
        token: any;
        jwtToken: any;
        id: any;
        data: any;
        headers: any;
        query: any;
    }) => any;
    remove: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, query, data, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
};
