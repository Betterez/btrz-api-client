export = currentShiftsFactory;
declare function currentShiftsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, userId, query, headers }: {
        token: any;
        userId: any;
        query?: {};
        headers: any;
    }) => any;
};
