export = usersFactory;
declare function usersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, id, headers }?: {}) => any;
    getV2: ({ token, jwtToken, id, headers }?: {}) => any;
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, query, data, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    login: ({ token, jwtToken, query, data, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, userId, user, headers }: {
        token: any;
        jwtToken: any;
        userId: any;
        user: any;
        headers: any;
    }) => any;
    createOrUpdateMany: ({ token, jwtToken, users, headers }: {
        token: any;
        jwtToken: any;
        users: any;
        headers: any;
    }) => any;
    impersonate: ({ token, jwtToken, offlineUserId, headers }: {
        token: any;
        jwtToken: any;
        offlineUserId: any;
        headers: any;
    }) => any;
    delegation: ({ token, jwtToken, actionName, delegator, headers }: {
        token: any;
        jwtToken: any;
        actionName: any;
        delegator: any;
        headers: any;
    }) => any;
    revokeDelegation: ({ token, jwtToken, actionName, headers }: {
        token: any;
        jwtToken: any;
        actionName: any;
        headers: any;
    }) => any;
    sequences: {
        get({ token, jwtToken, userId, sequenceId, headers }: {
            token: any;
            jwtToken: any;
            userId: any;
            sequenceId: any;
            headers: any;
        }): any;
        all({ token, jwtToken, userId, query, headers }: {
            token: any;
            jwtToken: any;
            userId: any;
            query?: {};
            headers: any;
        }): any;
        create({ jwtToken, token, userId, sequence, headers }: {
            jwtToken: any;
            token: any;
            userId: any;
            sequence: any;
            headers: any;
        }): any;
        update({ jwtToken, token, userId, sequenceId, sequence, headers }: {
            jwtToken: any;
            token: any;
            userId: any;
            sequenceId: any;
            sequence: any;
            headers: any;
        }): any;
        transfer({ jwtToken, token, userId, sequenceId, newUserId, headers }: {
            jwtToken: any;
            token: any;
            userId: any;
            sequenceId: any;
            newUserId: any;
            headers: any;
        }): any;
    };
};
