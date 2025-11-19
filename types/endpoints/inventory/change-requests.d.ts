export = changeRequestsFactory;
declare function changeRequestsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ changerequestId, token, jwtToken, query, headers }: {
        changerequestId: any;
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ changerequestId, data, token, jwtToken, headers }: {
        changerequestId: any;
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    schedules: {
        get({ changeRequestId, token, jwtToken, query, headers }: {
            changeRequestId: any;
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
        create({ data, token, jwtToken, headers }: {
            data: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
        update({ changeRequestId, data, token, jwtToken, headers }: {
            changeRequestId: any;
            data: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
    };
};
