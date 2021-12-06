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
};
