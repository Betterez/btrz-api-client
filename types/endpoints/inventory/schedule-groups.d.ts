export = scheduleGroupsFactory;
declare function scheduleGroupsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, scheduleGroupId, query, headers }: {
        token: any;
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
