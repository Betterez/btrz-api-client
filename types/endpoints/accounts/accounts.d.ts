export = accountsFactory;
declare function accountsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ jwtToken, accountId, headers }: {
        jwtToken: any;
        accountId: any;
        headers: any;
    }) => any;
};
