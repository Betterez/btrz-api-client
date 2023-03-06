export = shiftsFactory;
declare function shiftsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ jwtToken, token, query, headers }: {
        jwtToken: any;
        token: any;
        query: any;
        headers: any;
    }) => any;
    get: ({ token, userId, headers }: {
        token: any;
        userId: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, shiftData, headers }: {
        jwtToken: any;
        token: any;
        shiftData: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, shiftId, operations, headers, query }: {
        jwtToken: any;
        token: any;
        shiftId: any;
        operations: any;
        headers: any;
        query: any;
    }) => any;
    payments: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    locationClosures: {
        create({ jwtToken, token, locationClosure, headers }: {
            jwtToken: any;
            token: any;
            locationClosure: any;
            headers: any;
        }): any;
        all({ jwtToken, token, query, headers }: {
            jwtToken: any;
            token: any;
            query: any;
            headers: any;
        }): any;
        get({ token, jwtToken, locationClosureId, headers }: {
            token: any;
            jwtToken: any;
            locationClosureId: any;
            headers: any;
        }): any;
        comments: {
            create({ jwtToken, token, locationClosureId, locationClosureComment, headers }: {
                jwtToken: any;
                token: any;
                locationClosureId: any;
                locationClosureComment: any;
                headers: any;
            }): any;
        };
    };
};
