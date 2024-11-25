export = scheduleGroupsFactory;
declare function scheduleGroupsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, scheduleGroupId, query, headers }: {
        token: any;
        jwtToken: any;
        scheduleGroupId: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, scheduleGroup, headers }: {
        token: any;
        jwtToken: any;
        scheduleGroup: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, scheduleGroupId, scheduleGroup, headers }: {
        token: any;
        jwtToken: any;
        scheduleGroupId: any;
        scheduleGroup: any;
        headers: any;
    }) => any;
};
