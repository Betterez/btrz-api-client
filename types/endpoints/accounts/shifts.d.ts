export = shiftsFactory;
declare function shiftsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
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
};
