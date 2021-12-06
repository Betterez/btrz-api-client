export = transactionFactory;
declare function transactionFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, id, providerId, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        providerId: any;
        headers: any;
    }) => any;
};
